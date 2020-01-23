import { CounterState, COUNT_STATE } from "./components/counter/state";
import { UserState, USER_STATE } from "./components/user/state";

export interface AppState {
  count: CounterState;
  user: UserState;
}

export const APP_STATE = [COUNT_STATE, USER_STATE];
