import { StateConfig } from 'projects/ng-store/src/lib/models';
import { logger } from 'projects/ng-store/src/public-api';

export interface Temp {
  temp: string;
}

const actions = new Map();

actions.set('@LAZY_INIT', () => ({ temp: 'init temp' }));
actions.set('@DESTROY', () => null);

export const TEMP_STATE_CONFIG: StateConfig = {
  name: 'temp',
  actions,
  plugins: [logger()]
};
