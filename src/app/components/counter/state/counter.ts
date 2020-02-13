import { undoable } from 'src/app/services/store/plugins/undoable';
import { keeper } from 'src/app/services/store/plugins/keeper';
import { logger } from 'src/app/services/store/plugins/logger';
import { StateConfig } from 'src/app/services/store/models';

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
