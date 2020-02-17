import { Store } from 'projects/ng-store/src/lib/core/models';
import { CounterActions } from './components/counter/store/models/counter-actions.type';
import { Counter } from './components/counter/store/models/counter.type';
import { UserActions } from './components/user/store/models/user-actions.type';
import { User } from './components/user/store/models/user.interface';
import { ThemeActions } from './services/theme/store/models/theme-actions.type';
import { Theme } from './services/theme/store/models/theme.type';

export interface AppState {
  theme: Store<Theme, ThemeActions>;
  user: Store<User, UserActions>;
  counter: Store<Counter, CounterActions>;
}
