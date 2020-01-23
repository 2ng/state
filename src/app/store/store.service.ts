import { Inject, InjectionToken } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";
import { shareReplay } from "rxjs/internal/operators/shareReplay";
import { pluck } from "rxjs/internal/operators/pluck";
import { State } from "./state.class";
import { AppState } from "../store";
import { StateInterface } from "./state.types";

export const STORE_TOKEN = new InjectionToken<StateInterface[]>("STORE_TOKEN");

export class Store {
  private store = new BehaviorSubject<{ [key: string]: any }>({});
  private statesMap = new Map<string, State>();

  constructor(@Inject(STORE_TOKEN) private appState: StateInterface[]) {
    this.appState.forEach(({ key, ...actions }) => {
      const state = this.createState(key);

      for (const action of Object.keys(actions)) {
        state.addAction(action, actions[action]);
      }

      state.dispatch("INIT");
    });
  }

  private createState(key: keyof AppState) {
    this.statesMap.set(key, new State(key, this.setState.bind(this)));
    return this.use(key) as State;
  }

  private setState(key: keyof AppState, value: any) {
    this.store.next({ ...this.store.value, [key]: value });
  }

  get(key: keyof AppState) {
    return this.store.pipe(pluck(key), distinctUntilChanged(), shareReplay({ refCount: true, bufferSize: 1 }));
  }

  use(key: keyof AppState) {
    return this.statesMap.get(key);
  }
}

// this[key] = state;
// AppStates["user"] | AppStates["count"]
