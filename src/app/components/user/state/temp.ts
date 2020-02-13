import { logger } from 'src/app/service/plugins/logger';
import { StateConfig } from 'src/app/service/models';

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
