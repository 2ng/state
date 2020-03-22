import { Injectable } from '@angular/core';
import { NgState } from 'state';

export interface Counter {
  counter: number;
}

const initialState: Counter = {
  counter: 0
};

@Injectable()
export class CounterStore extends NgState<Counter> {
  constructor() {
    super(initialState);
  }

  increment() {
    const currentCounter = this.state.get().counter;

    this.setState({
      counter: currentCounter + 1
    });
  }

  decrement() {
    const currentCounter = this.state.get().counter;

    this.setState({
      counter: currentCounter - 1
    });
  }

  setValue(value: number) {
    const currentCounter = this.state.get().counter;

    this.setState({
      counter: value
    });
  }
}
