import createStore from 'projects/ng-store/src/lib/core';
import applyMiddleware, { logger } from 'projects/ng-store/src/lib/core/middleware';
import { UserActions } from './models/user-actions.type';
import { User } from './models/user.interface';

const user = createStore<User, UserActions>('user');

user.on('@INIT', () => ({ name: 'andrey' }));
user.on('UPPERCASE', state => ({ name: state.name.toUpperCase() }));
user.on('LOWERCASE', state => ({ name: state.name.toLowerCase() }));

applyMiddleware(user, [logger()]);

export { user };
