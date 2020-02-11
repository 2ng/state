import { StateConfig, AppStateKeys } from 'src/app/core/store/models';
import { Counter } from '../models/counter.type';

export type CounterActions = '@INIT' | 'INC' | 'DEC' | 'SET';

const actions = new Map();

actions.set('@INIT', () => 0);
actions.set('INC', state => ++state);
actions.set('DEC', state => --state);
actions.set('SET', (state, value) => value);

export const COUNTER_STATE_CONFIG = {
  name: 'counter',
  actions
};
