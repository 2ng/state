import { Component } from '@angular/core';
import { UseState } from 'projects/ng-store/src/public-api';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  @UseState('counter') counter;

  increment() {
    this.counter.dispatch('INC');
  }

  decrement() {
    this.counter.dispatch('DEC');
  }

  undo() {
    this.counter.dispatch('@UNDO');
  }

  redo() {
    this.counter.dispatch('@REDO');
  }

  reset() {
    this.counter.dispatch('@INIT');
  }

  set(value) {
    this.counter.dispatch('SET', value);
  }
}
