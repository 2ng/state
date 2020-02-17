import { Observable } from "rxjs/internal/Observable";
import { Store } from "../core/models";

export type Use<T, A extends string> = Omit<
  Store<T, A>,
  "name" | "getActions"
> & { changes: Observable<T> };
