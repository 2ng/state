import { Middleware } from "../models";

export default function former(): Middleware {
  return store => {
    store.on("@INIT", () => ({}));
    store.on("@SET_VALUE", (state, data) => ({ ...state, ...data }));
  };
}
