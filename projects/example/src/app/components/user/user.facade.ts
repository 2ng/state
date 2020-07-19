import { Observable } from 'rxjs/internal/Observable';
import { RequestStatus } from '~shared/services/http/class/loading/loading.interface';

export abstract class UserFacade {
  abstract name$: Observable<string>;
  abstract photo$: Observable<string>;
  abstract loading$: Observable<RequestStatus>;

  abstract uppercase(): void;
  abstract lowercase(): void;
  abstract loadPhoto(): void;
}
