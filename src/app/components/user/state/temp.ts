import { AppStateKeys, StateConfig } from 'src/app/core/store/models';
import { logger } from 'src/app/core/modules/logger';

export interface Temp {
  temp: string;
}

const actions = new Map();

actions.set('@LAZY_INIT', () => ({temp : 'init temp' }));
actions.set('@DESTROY', () => null);

export const TEMP_STATE_CONFIG = {
  name: 'temp',
  actions,
  modules: [logger()]
};

