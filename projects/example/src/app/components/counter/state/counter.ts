import { StateConfig } from 'projects/ng-store/src/lib/models';
import { undoable, keeper, logger } from 'projects/ng-store/src/public-api';

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
