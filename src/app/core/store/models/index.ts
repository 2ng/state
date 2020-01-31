export type StateActions<State, Actions extends string = 'INIT'> = { [key in Actions]: (state: State, data?: any) => State };

export type StateConfig<StateKeys, State = any, Actions extends string = 'INIT'> = {
  name: StateKeys;
  actions: StateActions<State, Actions>;
};

export type DispatchFunction<Actions> = (key: Actions, data?: any) => void;

// ^)
export type AppStateKeys = 'counter' | 'user' | 'temp';
