import { Observable } from "rxjs/internal/Observable";
import Store from "@ng-store/core";

export type Use<T, A extends string> = Store<T, A> & { changes: Observable<T> };
