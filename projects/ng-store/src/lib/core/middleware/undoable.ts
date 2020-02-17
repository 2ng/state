import { Middleware } from "../models";

export default function undoable(config?): Middleware {
  return store => {
    const actions = store.getActions();

    for (const action in actions) {
      const original = actions[action];

      actions[action] = (state, data) => {
        if (!state) state = { past: [], present: null, future: [] };
        const present = original(state.present, data);

        return {
          past: [...state.past, state.present],
          present,
          future: []
        };
      };
    }

    store.on("@UNDO", state => {
      const { past, present, future } = state;
      if (!past.length) return { past, present, future };

      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);
      return {
        past: newPast,
        present: previous,
        future: [present, ...future]
      };
    });

    store.on("@REDO", state => {
      const { past, present, future } = state;
      if (!future.length) return { past, present, future };

      const next = future[0];
      const newFuture = future.slice(1);
      return {
        past: [...past, present],
        present: next,
        future: newFuture
      };
    });
  };
}
