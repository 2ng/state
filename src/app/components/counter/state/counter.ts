import { undoable } from 'src/app/service/plugins/undoable';
import { keeper } from 'src/app/service/plugins/keeper';
import { logger } from 'src/app/service/plugins/logger';
import { StateConfig } from 'src/app/service/models';

export type CounterActions = '@INIT' | '@UNDO' | '@REDO' | 'INC' | 'DEC' | 'SET';

const actions = new Map();

actions.set('@INIT', () => 0);
actions.set('INC', state => ++state);
actions.set('DEC', state => --state);
actions.set('SET', (state, value) => value);

export const COUNTER_STATE_CONFIG: StateConfig = {
  name: 'counter',
  actions,
  plugins: [undoable(), keeper(), logger()]
};
