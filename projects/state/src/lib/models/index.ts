import {Observable} from 'rxjs';

export interface State<T extends { [key: string]: any } = any> {
  get: () => T;
  changes: <K>(keyOrFn?: keyof T | ((state: T) => K)) => Observable<K>;
}
