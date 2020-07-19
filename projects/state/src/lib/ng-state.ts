import isEqual from '@2utils/is-equal';
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs';
import { distinctUntilChanged, map, mergeMap, tap } from 'rxjs/operators';

export type Action = (actions: Observable<void>) => Observable<any>;

interface Dispatch<T = any> {
  action: Action;
  payload?: T;
}

export class NgState<T extends { [key: string]: any } = any> {
  private _state = new BehaviorSubject<T>({} as T);
  private _actions = new Subject<Dispatch>();

  private _actions$$: Subscription = this._actions
    .pipe(
      mergeMap(({ action, payload }) => action(of(payload))),
      tap(partialState => this.setState(partialState))
    )
    .subscribe();

  /** @action Устанавливает начальное состояние */
  INIT = this.pipe(map((state: T) => state));

  constructor(initialState: T) {
    this.dispatch(this.INIT, initialState);
  }

  get state(): T {
    return this._state.value;
  }

  protected setState(partialState: Partial<T>): void {
    this._state.next({ ...this.state, ...partialState });
  }

  protected select<K>(mappedFn?: (state: T) => K): Observable<K> {
    return mappedFn
      ? this._state.pipe(
          map(state => mappedFn(state)),
          distinctUntilChanged(isEqual)
        )
      : this._state.asObservable().pipe(distinctUntilChanged(isEqual));
  }

  dispatch(action: Action, payload?: any) {
    this._actions.next({ action, payload });
  }

  protected pipe(...operations): Action {
    return (actions: Observable<void>) =>
      // @ts-ignore
      actions.pipe(...operations);
  }

  destroy(): void {
    this._actions$$.unsubscribe();
    this._actions.complete();
    this._state.complete();
  }
}
