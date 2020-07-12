import { NgState } from '@2ng/state';
import { Injectable } from '@angular/core';
import { CounterFacade } from '~components/counter/counter.facade';

interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0,
};

@Injectable()
export class CounterStore extends NgState<CounterState> implements CounterFacade {
  counter$ = this.select(state => state.counter);

  constructor() {
    super(initialState);
  }

  increment() {
    this.setState({ counter: ++this.state.counter });
  }

  decrement() {
    this.setState({ counter: --this.state.counter });
  }

  setValue(counter: number) {
    this.setState({ counter });
  }
}
