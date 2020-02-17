export function UseState<N extends string = string>(stateName: N) {
  return function(target: any, propKey: N): void {
    
    Object.defineProperties(target, {
      [propKey]: {
        get() {
          return this._storeService.use(stateName);
        }
      }
    });
  };
}
