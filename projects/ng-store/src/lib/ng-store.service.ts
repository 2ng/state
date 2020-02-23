import { Inject, Injectable } from "@angular/core";
import Store from "@ng-store/core";
import { BehaviorSubject } from "rxjs";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";
import { pluck } from "rxjs/internal/operators/pluck";
import { NG_STORE } from "./ng-store.token";
import { isObjEqual } from "./utils/is-obj-equal";

@Injectable({
  providedIn: "root"
})
export class NgStoreService<S extends { [key in keyof S]: S[key] }> {
  private state$ = new BehaviorSubject({});

  constructor(@Inject(NG_STORE) private _stores: S) {}

  public use(key: keyof S) {
    const store = this._stores[key] as Store;
    return {
      ...store,
      dispatch: (action: string, data?: any) => {
        const newState = store.dispatch(action, data);
        this.state$.next({ ...this.state$.value, [key]: { ...newState } });
        return newState;
      },
      changes: this.state$.pipe(
        pluck(key as string),
        distinctUntilChanged(isObjEqual)
      )
    };
  }
}
