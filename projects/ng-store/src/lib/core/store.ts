import { Actions, StateConfig, DefaultActions } from '../models';

export class Store {
  private _state: { [key: string]: any } = {};
  get state() {
    return this._state;
  }

  private _actions: Actions = {};

  constructor(private config: StateConfig[]) {
    this.config.forEach(({ name, actions, plugins }) => {
      if (plugins) plugins.forEach(plugin => plugin(name, actions));
      this._actions[name] = actions;

      if (actions.has('@INIT')) this.dispatch(name, '@INIT');
    });
  }

  dispatch(key: string, action: DefaultActions, data?: any) {
    const actionFn = this._actions[key].get(action);
    const result = actionFn(this.state[key], data);
    const { [key]: k, ...stateWOcurrentKey } = this.state;

    this._state = action !== '@DESTROY' ? { ...stateWOcurrentKey, [key]: result } : { ...stateWOcurrentKey };
  }
}
