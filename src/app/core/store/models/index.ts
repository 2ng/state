export type StateActions<State, Actions extends string = 'INIT'> = { [key in Actions]: (state: State, data?: any) => State };

export type StateConfig<State = any, Actions extends string = 'INIT'> = {
  name: string;
  actions: StateActions<State, Actions>;
};

export type DispatchFunction<Actions> = (key: Actions, data?: any) => void;

// ^)
export type AppStateKeys = 'counter' | 'user';
