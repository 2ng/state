import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map, pluck } from 'rxjs/operators';
import isEqual from '@2utils/is-equal';

export class NgState<T extends { [key: string]: any } = any> {
  static isEqualFn: (a: any, b: any) => boolean = isEqual;

  private state$ = new BehaviorSubject<T>({} as T);

  state = {
    get: () => this.state$.value,
    changes: <K>(keyOrFn?: keyof T | ((state: T) => K)): Observable<K> =>
      getChanges(this.state$, keyOrFn as string)
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

function getChanges<K>(
  observable: Observable<any>,
  keyOrFn?: string | ((state: K) => K)
): Observable<K> {
  let changes = observable;

  if (typeof keyOrFn === 'string') {
    changes = changes.pipe(pluck(keyOrFn));
  }

  if (typeof keyOrFn === 'function') {
    changes = changes.pipe(map(state => keyOrFn(state)));
  }

  return changes.pipe(distinctUntilChanged(NgState.isEqualFn));
}
