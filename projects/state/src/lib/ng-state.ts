import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map, pluck } from 'rxjs/operators';
import isEqual from '@2utils/is-equal';

export class NgState<T extends { [key: string]: any } = any> {
  private _state$ = new BehaviorSubject<T>({} as T);

  protected get state() {
    return this._state$.value;
  }

  constructor(private initialState: T) {
    this.init();
  }

  protected setState(partialState: Partial<T>): void {
    this._state$.next({
      ...this.state,
      ...partialState,
    });
  }

  protected select(): Observable<T>;
  protected select<K extends keyof T>(key: K): Observable<T[K]>;
  protected select<K>(fn: (state: T) => K): Observable<K>;
  protected select(keyOrFn?: string | ((state: T) => any)): Observable<any> {
    let changes = this._state$.asObservable();

    if (typeof keyOrFn === 'string') {
      changes = changes.pipe(pluck(keyOrFn));
    }

    if (typeof keyOrFn === 'function') {
      changes = changes.pipe(map((state) => keyOrFn(state)));
    }

    return changes.pipe(distinctUntilChanged(isEqual));
  }

  init() {
    this.setState(this.initialState);
  }
}
