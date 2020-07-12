import { Observable } from 'rxjs/internal/Observable';

export abstract class CounterFacade {
  abstract counter$: Observable<number>;

  abstract increment(): void;
  abstract decrement(): void;
  abstract setValue(counter: number): void;
}
