import { StateConfig } from 'projects/ng-store/src/lib/models';
import { keeper, logger } from 'projects/ng-store/src/public-api';

type Theme = 'light' | 'dark';

const actions = new Map();

actions.set('@INIT', () => 'light');
actions.set('SET_THEME', (state, data) => data);

export const THEME_STATE_CONFIG: StateConfig = {
  name: 'theme',
  actions,
  plugins: [keeper(), logger()]
};
