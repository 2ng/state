import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { STORE_TOKEN } from './store.token';
import { AppStateKeys } from './models';

@Injectable()
export class StoreService {
  private _state = new BehaviorSubject<{ [key: string]: any}>({});
  private _actions: {[key: string]: Map<string, (state: any, data?: any) => any>} = {};

  constructor(@Inject(STORE_TOKEN) private config) {
    this.config.forEach(({name, actions, modules}) => {
      if (modules) modules.forEach(m => m(name, actions));
      this._actions[name] = actions;

      if(actions.has('@INIT')) this.dispatch(name)('@INIT');
    })
  }

  private dispatch(key: AppStateKeys) {
    return (action, data?) => {
      if (!this._actions[key]) return;
      
      const actionFn = this._actions[key].get(action);
      this._state.next({
        ...this._state.value,
        [key]: actionFn(this._state.value[key], data)
      })
    };
  }

  use(key: AppStateKeys) {
    return {
      observable: this._state.pipe(pluck(key), distinctUntilChanged()),
      dispatch: this.dispatch(key),
      getValue: () => this._state.value[key]
    };
  }
}
