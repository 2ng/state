import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { STORE_TOKEN } from './store.token';
import { AppStateKeys } from './models';

@Injectable({
  providedIn: 'root'
})
export class Store {
  static _state = new BehaviorSubject<{ [key: string]: any}>({});
  static _actions: {[key: string]: Map<string, (state: any, data?: any) => any>} = {};

  constructor(@Inject(STORE_TOKEN) private config) {
    this.config.forEach(({name, actions, modules}) => {
      if (modules) modules.forEach(m => m(name, actions));
      Store._actions[name] = actions;

      if(actions.has('@INIT')) Store.dispatch(name)('@INIT');
    })
  }

  static dispatch(key: AppStateKeys) {
    return (action, data?) => {
      const actionFn = Store._actions[key].get(action);
      const result = actionFn(Store._state.value[key], data);
      const { [key]: k, ...stateWOcurrentKey } = Store._state.value;

      Store._state.next(
        action !== '@DESTROY' ? 
          { ...stateWOcurrentKey, [key]: result } : 
          { ...stateWOcurrentKey }
        )
    };
  }

  static use(key: AppStateKeys) {
    return {
      observable: Store._state.pipe(pluck(key), distinctUntilChanged()),
      dispatch: Store.dispatch(key),
      getValue: () => Store._state.value[key]
    };
  }
}
