import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { STORE_TOKEN } from './store.token';

@Injectable()
export class StoreService<StateKeys extends string> {
  private _state = new BehaviorSubject<{ [key: string]: any}>({});
  private _actions: {[key: string]: Map<string, (state: any, data?: any) => any>} = {};

  constructor(@Inject(STORE_TOKEN) private config) {
    this.config.forEach(({name, actions}) => {

      this._actions[name] = actions;
      this.dispatch(name)('@INIT');
    })
  }

  private dispatch(key) {
    return (action, data?) => {
      if (!this._actions[key]) return;
      
      const actionFn = this._actions[key].get(action);
      this._state.next({
        ...this._state.value,
        [key]: actionFn(this._state.value[key], data)
      })
    };
  }

  use(key) {
    return {
      observable: this._state.pipe(pluck(key), distinctUntilChanged()),
      dispatch: this.dispatch(key),
      getValue: () => this._state.value[key]
    };
  }
}
