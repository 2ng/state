export class State {
  private state: any;
  private actions = new Map<string, (state: any, value?: any) => any>();

  get value() {
    return this.state;
  }

  constructor(
    private key: string,
    private setState: (key: string, state: any) => void
  ) {}

  dispatch(action: string, value?: any): void {
    this.state = this.actions.get(action)(this.state, value);
    this.setState(this.key, this.state);

    this._log(this.key, action, this.state);
  }

  addAction(action: string, fn: (state: any) => any) {
    this.actions.set(action, fn);
  }

  _log(key, action, value) {
    console.log(
      "%c" + `[${key}]` + " %c" + action,
      "color: #070",
      "color: #070; font-weight: 700",
      value
    );
  }
}
