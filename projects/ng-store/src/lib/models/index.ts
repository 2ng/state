import { Observable } from "rxjs";

export type Use<T, A extends string> = {
  dispatch: (action: A, data?: any) => T;
  getState: () => T;
  changes: Observable<T>;
};
