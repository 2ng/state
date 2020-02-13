import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { pluck } from 'rxjs/internal/operators/pluck';
import { STORE_TOKEN } from './store.token';
import { StateConfig } from './models';
import { Store } from './core/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private static _store: Store;
  private static _stateSubject: BehaviorSubject<{ [key: string]: any }>;

  constructor(@Inject(STORE_TOKEN) private config: StateConfig[]) {
    StoreService._store = new Store(this.config);
    StoreService._stateSubject = new BehaviorSubject(StoreService._store.state);
  }

  private static dispatch(key: string) {
    return (action, data?) => {
      this._store.dispatch(key, action, data);
      this._stateSubject.next(this._store.state);
    };
  }

  public static use(key: string) {
    return {
      observable: this._stateSubject.pipe(pluck(key), distinctUntilChanged()),
      dispatch: this.dispatch(key),
      getValue: () => this._stateSubject.value[key]
    };
  }
}
