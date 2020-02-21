import { CounterActions } from './models/counter-actions.type';
import { Counter } from './models/counter.type';
import Store from '@ng-store/core';

export const counter = new Store<Counter, CounterActions>({ counter: 0 });

counter.on('INC', state => ({ counter: ++state.counter }));
counter.on('DEC', state => ({ counter: --state.counter }));
counter.on('SET', (state, value) => ({ counter: value }));
