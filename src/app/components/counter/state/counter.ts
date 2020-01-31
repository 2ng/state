import { StateConfig } from 'src/app/core/store/models';
import { Counter } from '../models/counter.type';

export type CounterActions = 'INIT' | 'INC' | 'DEC' | 'SET';

export const COUNTER_STATE_CONFIG: StateConfig<Counter, CounterActions> = {
  name: 'counter',
  actions: {
    INIT: () => 0,
    INC: state => ++state,
    DEC: state => --state,
    SET: (state, value) => value
  }
};
