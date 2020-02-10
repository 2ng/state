import { AppStateKeys, StateConfig } from 'src/app/core/store/models';

export interface Temp {
  temp: string;
}

export const TEMP_STATE_CONFIG: StateConfig<AppStateKeys, Temp> = {
  name: 'temp',
  actions: (store) => ({
    INIT: () => ({ temp: 'init temp' })
  })
};
