import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { distinctUntilChanged, pluck, shareReplay } from 'rxjs/operators';
import { StateConfig } from './models';
import { STORE_TOKEN } from './store.token';

@Injectable()
export class StoreService<StateKeys extends string> {
  private state$ = new BehaviorSubject<{ [key in StateKeys]?: any }>({});
  private actions: { [key: string]: any } = {};

  constructor(@Inject(STORE_TOKEN) private config: StateConfig<StateKeys>[]) {
    this.config.forEach(({ name, actions }) => this.add({ name, actions }));
  }

  private set state(value) {
    this.state$.next(value);
  }

  private dispatch(stateKey: StateKeys) {
    return (action, data?) => {
      const actionFn = this.actions[stateKey][action];
      const state = this.state$.value[stateKey];

      this.state = {
        ...this.state$.value,
        [stateKey]: actionFn(state, data)
      };
    };
  }

  private getValue(key: StateKeys) {
    return () => this.state$.value[key];
  }

  private pluck(key) {
    return this.state$.pipe(pluck(key), distinctUntilChanged(), shareReplay({ refCount: true, bufferSize: 1 }));
  }

  private omit(key: StateKeys) {
    return () => {
      if (!this.actions[key]) return;

      const { [key]: omittedV, ...propsV } = this.state$.value;
      const { [key]: omittedA, ...propsA } = this.actions;

      this.actions = { ...propsA };
      this.state = { ...propsV };
    };
  }

  add({ name, actions }: StateConfig<StateKeys>) {
    if (!this.actions[name]) {
      this.actions[name] = actions;
      this.dispatch(name)('INIT');
    }

    return {
      ...this.use(name),
      omit: this.omit(name)
    };
  }

  use(key: StateKeys) {
    return {
      observable: this.pluck(key),
      dispatch: this.dispatch(key),
      getValue: this.getValue(key)
    };
  }
}
