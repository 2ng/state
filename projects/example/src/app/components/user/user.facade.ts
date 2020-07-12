import { Observable } from 'rxjs/internal/Observable';
import { LoadingState } from '~shared/class/loading/loading.interface';

export abstract class UserFacade {
  abstract name$: Observable<string>;
  abstract photo$: Observable<string>;
  abstract loading$: Observable<LoadingState>;

  abstract uppercase(): void;
  abstract lowercase(): void;
  abstract loadPhoto(): void;
}
