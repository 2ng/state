import { Middleware } from "../models";

export default function keeper(
  name = "ng-store",
  storage = localStorage
): Middleware {
  return store => {
    const actions = store.getActions();
    const savedStr = storage.getItem(name);
    const savedObj = JSON.parse(savedStr);

    store.on("@LOAD", (state, data) => JSON.parse(data)[store.name]);

    if (savedObj && savedObj[store.name])
      actions["@INIT"] = () => {
        store.dispatch("@LOAD", savedStr);
        return store.getState();
      };

    for (const action in actions) {
      if (action !== "@INIT" && action !== "@LOAD") {
        const original = actions[action];

        actions[action] = (state, data) => {
          const res = original(state, data);
          const saved = JSON.parse(storage.getItem(name));
          storage.setItem(
            name,
            JSON.stringify({ ...saved, [store.name]: res })
          );
          return res;
        };
      }
    }
  };
}
