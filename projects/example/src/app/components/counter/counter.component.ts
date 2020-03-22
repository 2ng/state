import { Component } from '@angular/core';
import { CounterStore } from './store/counter.store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  providers: [CounterStore]
})
export class CounterComponent {
  counter = this.counterStore.state.changes('counter');

  constructor(private counterStore: CounterStore) {}

  increment() {
    this.counterStore.increment();
  }

  decrement() {
    this.counterStore.decrement();
  }

  setValue(value: number) {
    this.counterStore.setValue(value);
  }
}
