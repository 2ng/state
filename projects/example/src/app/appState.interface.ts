import { CounterActions } from './components/counter/store/models/counter-actions.type';
import { Counter } from './components/counter/store/models/counter.type';
import { UserActions } from './components/user/store/models/user-actions.type';
import { User } from './components/user/store/models/user.interface';
import { ThemeActions } from './services/theme/store/models/theme-actions.type';
import { Theme } from './services/theme/store/models/theme.type';
import Store from '@ng-store/core';

export interface AppState {
  themeStore: Store<Theme, ThemeActions>;
  userStore: Store<User, UserActions>;
  counterStore: Store<Counter, CounterActions>;
}
