export interface Store<T = any, A extends string = string> {
  name: string;
  dispatch: (action: A, data?: any) => T;
  on: (action: A, cb: (state: T, data?: any) => T) => void;
  getActions: () => { [key in A]: (state: T, data?: any) => T } | {};
  getState: () => T;
}

export type Middleware = (state: Store) => void;
