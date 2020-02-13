import { StateConfig } from 'projects/ng-store/src/lib/models';
import { logger, keeper } from 'projects/ng-store/src/public-api';

export type UserActions = '@INIT' | 'UPPERCASE' | 'LOWERCASE' | '@DESTROY';

const actions: Map<string, (state?: any, data?: any) => any> = new Map();

actions.set('@INIT', () => ({ name: 'andrey' }));
actions.set('UPPERCASE', state => ({ name: state.name.toUpperCase() }));
actions.set('LOWERCASE', state => ({ name: state.name.toLowerCase() }));

export const USER_STATE_CONFIG: StateConfig = {
  name: 'user',
  actions,
  plugins: [keeper(), logger()]
};
