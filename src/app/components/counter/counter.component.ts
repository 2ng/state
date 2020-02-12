import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStateKeys, DispatchFunction } from 'src/app/core/store/models';
import { Store } from 'src/app/core/store/store.service';
import { Counter } from './models/counter.type';
import { CounterActions } from './state/counter';
import { UseState } from 'src/app/core/decorators/use-state';

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
