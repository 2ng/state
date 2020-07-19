import { CounterFacade } from '~components/counter/counter.facade';
import { ThemeFacade } from '~components/theme-toggler/theme-toggler.facade';
import { CounterStore } from '../components/counter/store/counter.store';
import { ThemeStore } from '../components/theme-toggler/store/theme.store';
import { UserStore } from '~components/user/store/user.store';
import { UserFacade } from '~components/user/user.facade';
import { UserBehaviorSubjectStore } from '~components/user/store/user-behavior-subject.store';

export const STORE = [
  { provide: UserFacade, useClass: UserStore },
  // { provide: UserFacade, useClass: UserBehaviorSubjectStore },
  { provide: CounterFacade, useClass: CounterStore },
  { provide: ThemeFacade, useClass: ThemeStore },
];
