import { CounterFacade } from '~components/counter/counter.facade';
import { ThemeFacade } from '~components/theme-toggler/theme-toggler.facade';
import { UserFacade } from '~components/user/user.facade';
import { CounterStore } from './counter.store';
import { ThemeStore } from './theme.store';
import { UserStore } from './user.store';
import { UserBehaviorSubjectService } from '~components/user/service/behavior-subject.service';

export const STORE = [
  { provide: UserFacade, useClass: UserStore },
  // { provide: UserFacade, useClass: UserBehaviorSubjectService },
  { provide: CounterFacade, useClass: CounterStore },
  { provide: ThemeFacade, useClass: ThemeStore },
];
