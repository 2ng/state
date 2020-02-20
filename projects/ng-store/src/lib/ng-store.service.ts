import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";
import { pluck } from "rxjs/internal/operators/pluck";
import { NG_STORE } from "./ng-store.token";

@Injectable({
  providedIn: "root"
})
export class NgStoreService<S extends { [key in keyof S]: S[key] }> {
  private _state = new BehaviorSubject({});

  constructor(@Inject(NG_STORE) private _stores: any) {} //{ [key in keyof S]: S[key] }

  public use(key: keyof S) {
    const store = this._stores[key];
    return {
      ...store,
      dispatch: (action: string, data?: any) => {
        store.dispatch(action, data);
        this._state.next({ ...this._state.value, [key]: store.state });
      },
      changes: this._state.pipe(pluck(key as string), distinctUntilChanged())
    };
  }
}
