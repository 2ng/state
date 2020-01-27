import { StateActions } from 'src/app/core/store/models';

export interface Temp {
  temp: string;
}

export interface TempActions extends StateActions<Temp> {}

const temp: TempActions = {
  INIT: () => ({ temp: 'init temp' })
};

export const TEMP_STATE_CONFIG = {
  name: 'temp',
  actions: temp
};
