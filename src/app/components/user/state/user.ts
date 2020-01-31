import { AppStateKeys, StateConfig } from 'src/app/core/store/models';
import { User } from '../models/user.interface';

export type UserActions = 'INIT' | 'UPPERCASE' | 'LOWERCASE';

export const USER_STATE_CONFIG: StateConfig<AppStateKeys, User, UserActions> = {
  name: 'user',
  actions: {
    INIT: () => ({ name: 'andrey' }),
    UPPERCASE: state => ({ name: state.name.toUpperCase() }),
    LOWERCASE: state => ({ name: state.name.toLowerCase() })
  }
};
