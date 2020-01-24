export type StateActions<V> = {
  INIT: () => V;
};

export interface Config {
  name: string;
  actions: {
    [key: string]: (state: any, data?: any) => any;
  };
}

export type DispatchFunction<Actions> = (key: keyof Actions, data?: any) => void;

// ^)
export type AppStateKeys = 'counter' | 'user';
