import {BehaviorSubject, Observable} from 'rxjs';
import {distinctUntilChanged, map, pluck} from 'rxjs/operators';
import {State} from './models';
import isEqual from './utils/is-equal';

export class NgState<T extends { [key: string]: any } = any> {
  private state$ = new BehaviorSubject<T>({} as T);

  state: State<T> = {
    get: () => this.state$.value,
    changes: keyOrFn => this.changes(keyOrFn)
  };

  constructor(initialState: T) {
    this.setState(initialState);
  }

  protected setState(partialState: Partial<T>): void {
    this.state$.next({
      ...this.state.get(),
      ...partialState
    });
  }

  private changes(keyOrFn?: keyof T | ((state: T) => any)): Observable<any> {
    let changes: Observable<any> = this.state$;

    if (typeof keyOrFn === 'string') {
      changes = changes.pipe(pluck(keyOrFn));
    }

    if (typeof keyOrFn === 'function') {
      changes = changes.pipe(map(state => keyOrFn(state)));
    }

    return changes.pipe(distinctUntilChanged(isEqual));
  }
}
