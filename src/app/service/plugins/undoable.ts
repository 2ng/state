export const undoable = (config?) => {
    return function(name, actions: Map<string, (state: any, data?: any) => any>){
  
      actions.forEach((actionFn, action) => {
        actions.set(action, (state, data?) => {
          if (!state) state = {past: [], present: null, future: []}
          const newState = actionFn(state.present, data);
  
          return {
            past: [...state.past, state.present],
            present: newState,
            future: []
          }
        })
      })
  
      actions.set('@UNDO', ({past, present, future}) => {
        if (!(past.length)) return {past, present, future};
  
        const previous = past[past.length - 1]
        const newPast = past.slice(0, past.length - 1)
        return {
          past: newPast,
          present: previous,
          future: [present, ...future]
        }
      });
  
      actions.set('@REDO', ({past, present, future}) => {
        if (!future.length) return {past, present, future};
  
        const next = future[0]
        const newFuture = future.slice(1)
        return {
          past: [...past, present],
          present: next,
          future: newFuture
        }
      });
  
      return actions;
    }
  }