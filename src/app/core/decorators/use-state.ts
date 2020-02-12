import { Store } from '../store/store.service';

export function UseState(stateName) {
    return function(target, propKey): void {
      Object.defineProperties(target, {
        [propKey]: {
          get() {
            return Store.use(stateName);
          }
        }
      });
    };
  }