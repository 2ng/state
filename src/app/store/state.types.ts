import { AppState } from "../store";

export type StateInterface = {
  key: keyof AppState;
  INIT: () => any;
} & {
  [key: string]: (state: any) => any;
};

type StateActions<StateConfig> = keyof Omit<StateConfig, "key">;

export interface CreateState<StateConfig> {
  dispatch: (action: StateActions<StateConfig>, value?: any) => void;
}
