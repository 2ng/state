export const keeper = () => {
  return function(name, actions: Map<string, (state: any, data?: any) => any>){
    const saved = JSON.parse(localStorage.getItem(name));
    actions.set('@LOAD', () => saved);

    if (saved) actions.set('@INIT', () => actions.get('@LOAD')(null));
    
    actions.forEach((actionFn, action) => {
      if (action === '@INIT') return;

      actions.set(action, (state, data) => {
        const res = actionFn(state, data);
        localStorage.setItem(name, JSON.stringify(res));
        return res;
      })
    })

    return actions;
  }
}