import { StateActions } from 'src/app/core/store/models';
import { User } from '../models/user.interface';

export interface UserActions extends StateActions<User> {
  UPPERCASE: (state: User) => User;
  LOWERCASE: (state: User) => User;
}

const actions: UserActions = {
  INIT: () => ({ name: 'andrey' }),
  UPPERCASE: user => ({ ...user, name: user.name.toUpperCase() }),
  LOWERCASE: state => ({ ...state, name: state.name.toLowerCase() })
};

export const USER_STATE_CONFIG = {
  name: 'user',
  actions
};
