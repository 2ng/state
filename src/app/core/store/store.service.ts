import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { distinctUntilChanged, pluck, shareReplay } from 'rxjs/operators';
import { AppStateKeys, Config } from './models';
import { STORE_TOKEN } from './store.token';

@Injectable()
export class StoreService {
  private state$ = new BehaviorSubject<{ [key: string]: any }>({});
  private actions = {};

  constructor(@Inject(STORE_TOKEN) private config: Config[]) {
    this.config.forEach(({ name, actions }) => {
      this.actions[name] = actions;
      this.dispatch(name)('INIT');
    });
  }

  private dispatch(stateKey) {
    return (action, data?) => {
      const actionFn = this.actions[stateKey][action];
      const state = this.state$.value[stateKey];

      this.state$.next({
        ...this.state$.value,
        [stateKey]: actionFn(state, data)
      });
    };
  }

  private getValue(key) {
    return () => this.state$.value[key];
  }

  private pluck(key) {
    return this.state$.pipe(pluck(key), distinctUntilChanged(), shareReplay({ refCount: true, bufferSize: 1 }));
  }

  use(key: AppStateKeys) {
    return {
      observable: this.pluck(key),
      dispatch: this.dispatch(key),
      getValue: this.getValue(key)
    };
  }
}
