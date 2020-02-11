import { AppStateKeys, StateConfig } from 'src/app/core/store/models';

export interface Temp {
  temp: string;
}

const actions = new Map();

actions.set('@INIT', () => ({ temp: 'init temp' }));

export const temp = {
  name: 'temp',
  actions
};
