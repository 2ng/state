import { Store } from './models';

export default function createStore<T, A extends string>(name): Store<T, A> {
  let state: T;
  let actions: Partial<{ [key in A]: (state: T, data?: any) => T }> = {};

  function on(action: A, cb: (state: T, data?: any) => T) {
    actions[action] = cb;
  }

  function dispatch(action: A, data?: any): T {
    state = actions[action](state, data);
    return state;
  }

  function getState() {
    return state;
  }

  function getActions() {
    return actions;
  }

  return {
    name,
    getState,
    getActions,
    dispatch,
    on
  };
}
