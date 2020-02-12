import { StateConfig, AppStateKeys } from 'src/app/core/store/models';
import { Counter } from '../models/counter.type';
import { undoable } from 'src/app/core/modules/undoable';
import { keeper } from 'src/app/core/modules/keeper';
import { logger } from 'src/app/core/modules/logger';

export type CounterActions = '@INIT' | '@UNDO' | '@REDO' | 'INC' | 'DEC' | 'SET';

const actions = new Map();

actions.set('@INIT', () => 0);
actions.set('INC', state => ++state);
actions.set('DEC', state => --state);
actions.set('SET', (state, value) => value);

export const COUNTER_STATE_CONFIG = {
  name: 'counter',
  actions,
  modules: [undoable(), keeper(), logger()]
};
