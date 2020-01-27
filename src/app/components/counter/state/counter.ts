import { StateActions } from 'src/app/core/store/models';
import { Counter } from '../models/counter.type';

export interface CounterActions extends StateActions<Counter> {
  INC: (state: number) => number;
  DEC: (state: number) => number;
  SET: (state: number, data: number) => number;
}

const actions: CounterActions = {
  INIT: () => 0,
  INC: state => ++state,
  DEC: state => --state,
  SET: (state, value) => value
};

export const COUNTER_STATE_CONFIG = {
  name: 'counter',
  actions
};
