function log(key, action, value) {
  // prettier-ignore
  console.log(
    '%c' + `[${key}]` + ' %c' + action, 
    'color: #070', 'color: #070; font-weight: 700', 
    value
    );
}

export const logger = () => {
  return function(name, actions: Map<string, (state: any, data?: any) => any>) {
    actions.forEach((actionFn, action) => {
      actions.set(action, (state, data) => {
        const res = actionFn(state, data);
        log(name, action, res);
        return res;
      });
    });

    return actions;
  };
};
