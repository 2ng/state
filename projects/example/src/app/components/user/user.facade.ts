import { Observable } from 'rxjs/internal/Observable';
import { LoadingStatus } from '~shared/services/http/class/loading/loading.interface';

export abstract class UserFacade {
  name: string;

  abstract name$: Observable<string>;
  abstract photo$: Observable<string>;
  abstract loading$: Observable<LoadingStatus>;

  abstract uppercase(): void;
  abstract lowercase(): void;
  abstract loadPhoto(): void;
}
