import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged, map, pluck } from "rxjs/operators";
import isEqual from "@2utils/is-equal";

export class NgState<T extends { [key: string]: any } = any> {
  static isEqualFn: (a: any, b: any) => boolean = isEqual;

  private state$ = new BehaviorSubject<T>({} as T);

  state = {
    get: () => this.state$.value,
    changes: this.changes
  };

  protected setState = (partialState: Partial<T>): void => {
    this.state$.next({
      ...this.state.get(),
      ...partialState
    });
  };

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
    let changes: Observable<any> = this.state$;

    if (typeof keyOrFn === "string") {
      changes = changes.pipe(pluck(keyOrFn));
    }

    if (typeof keyOrFn === "function") {
      changes = changes.pipe(map(state => keyOrFn(state)));
    }

    return changes.pipe(distinctUntilChanged(NgState.isEqualFn));
  }
}
