import { Middleware, Store } from "../models";
import former from "./former";
import keeper from "./keeper";
import logger from "./logger";
import undoable from "./undoable";

export { keeper, logger, former, undoable };

export default function applyMiddleware(
  store: Store,
  middlewares: Middleware[]
): void {
  middlewares.forEach(m => m(store));
}
