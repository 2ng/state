import { StoreService } from '../store.service';

export function UseState(stateName: string) {
  return function(target: any, propKey: string): void {
    Object.defineProperties(target, {
      [propKey]: {
        get() {
          return StoreService.use(stateName);
        }
      }
    });
  };
}