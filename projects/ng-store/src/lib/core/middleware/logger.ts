import { Middleware } from "../models";

let i = 0;
const colors = ["green", "red"]; // .etc

export default function logger(): Middleware {
  const index = i;
  i++;

  return store => {
    const actions = store.getActions();

    for (const action in actions) {
      const original = actions[action];

      actions[action] = (state, data) => {
        const result = original(state, data);
        // prettier-ignore
        console.log(
          '%c' + `[${store.name}]` + ' %c' + action,
          `color: ${colors[index]}`, 'color: yellow',
          result || ''
        );
        return result;
      };
    }
  };
}
