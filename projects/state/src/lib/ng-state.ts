import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map, pluck } from 'rxjs/operators';
import isEqual from '@2utils/is-equal';

interface State<T> {
  get: () => T;
  changes: {
    (): Observable<T>;
    <K extends keyof T>(key: K): Observable<T[K]>;
    <K>(fn: (state: T) => K): Observable<K>;
  };
}

export class NgState<T extends { [key: string]: any } = any> {
  static isEqualFn: (a: any, b: any) => boolean = isEqual;

  private state$ = new BehaviorSubject<T>({} as T);

  state: State<T> = {
    get: () => this.state$.value,
    changes: this.changes.bind(this),
  };

  protected setState = (partialState: Partial<T>): void => {
    this.state$.next({
      ...this.state.get(),
      ...partialState,
    });
  }

  constructor(private initialState: T) {
    this.init();
  }

  init() {
    this.setState(this.initialState);
  }

  private changes(): Observable<T>;
  private changes<K extends keyof T>(key: K): Observable<T[K]>;
  private changes<K>(fn: (state: T) => K): Observable<K>;
  private changes(keyOrFn?: string | ((state: T) => any)): Observable<any> {
    let changes = this.state$.asObservable();

    if (typeof keyOrFn === 'string') {
      changes = changes.pipe(pluck(keyOrFn));
    }

    if (typeof keyOrFn === 'function') {
      changes = changes.pipe(map((state) => keyOrFn(state)));
    }

    return changes.pipe(distinctUntilChanged(NgState.isEqualFn));
  }
}
