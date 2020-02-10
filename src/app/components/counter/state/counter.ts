import { StateConfig, AppStateKeys } from 'src/app/core/store/models';
import { Counter } from '../models/counter.type';

export type CounterActions = 'INIT' | 'INC' | 'DEC' | 'SET';


export const COUNTER_STATE_CONFIG: StateConfig<AppStateKeys, Counter> = {
  name: 'counter',
  actions: (store) => ({
    INIT: () => 0,
    INC: state => ++state,
    DEC: state => --state,
    SET: (state, value) => value
  })
};
