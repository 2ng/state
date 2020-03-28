import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map, pluck } from 'rxjs/operators';
import isEqual from '@2utils/is-equal';

export class NgState<T extends { [key: string]: any } = any> {
  static isEqualFn: (a: any, b: any) => boolean = isEqual;

  private state$ = new BehaviorSubject<T>({} as T);

  state = {
    get: () => this.state$.value,
    changes: <K>(keyOrFn?: keyof T | ((state: T) => K)): Observable<K> =>
      getChanges(this.state$, NgState.isEqualFn, keyOrFn)
  };

  protected setState = (partialState: Partial<T>): void => {
    this.state$.next({
      ...this.state.get(),
      ...partialState
    });
  }

  constructor(private initialState: T) {
    this.init();
  }

  init() {
    this.setState(this.initialState);
  }
}

function getChanges<T, K>(
  observable: Observable<T>,
  isEqualFn: (a: any, b: any) => boolean,
  keyOrFn?: keyof T | ((state: T) => K)
): Observable<K> {
  let changes: Observable<any> = observable;

  if (typeof keyOrFn === 'string') {
    changes = changes.pipe(pluck(keyOrFn));
  }

  if (typeof keyOrFn === 'function') {
    changes = changes.pipe(map(state => keyOrFn(state)));
  }

  return changes.pipe(distinctUntilChanged(isEqualFn));
}
