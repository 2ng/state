import { NgState } from '@2ng/state';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { CounterFacade } from '~components/counter/counter.facade';

interface CounterState {
  counter: number;
}

@Injectable()
export class CounterStore extends NgState<CounterState> implements CounterFacade {
  /** @selector Значение счетчика */
  counter$ = this.select(state => state.counter);

  /** @action Увеличивает текущее значение счетчика */
  INCREMENT = this.pipe(map(() => ({ counter: ++this.state.counter })));

  /** @action Уменьшает текущее значение счетчика */
  DECREMENT = this.pipe(map(() => ({ counter: --this.state.counter })));

  /** @action Устанавливает конкретное значение счетчика */
  SET_VALUE = this.pipe(map((counter: number) => ({ counter })));

  constructor() {
    super({
      counter: 0,
    });
  }

  increment() {
    this.dispatch(this.INCREMENT);
  }

  decrement() {
    this.dispatch(this.DECREMENT);
  }

  setValue(counter: number) {
    this.dispatch(this.SET_VALUE, counter);
  }
}
