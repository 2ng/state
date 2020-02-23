import { UserActions } from './models/user-actions.type';
import { User } from './models/user.interface';
import Store from '@ng-store/core';

export const user = new Store<User, UserActions>({ user: 'andrey', age: 29 });

user.on('UPPERCASE', state => ({ user: state.user.toUpperCase() }));
user.on('LOWERCASE', state => ({ user: state.user.toLowerCase() }));
