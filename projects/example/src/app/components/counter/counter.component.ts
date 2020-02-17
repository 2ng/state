import { Component } from '@angular/core';
import { Use } from 'projects/ng-store/src/lib/models';
import { NgStoreService } from 'projects/ng-store/src/public-api';
import { AppState } from '../../appState.interface';
import { CounterActions } from './store/models/counter-actions.type';
import { Counter } from './store/models/counter.type';


@Component({
  selector: 'counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  counter: Use<Counter, CounterActions> = this._storeService.use('counter');

  constructor(private _storeService: NgStoreService<AppState>) {
    this.counter.dispatch('@INIT');
  }

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

  set(value: number) {
    this.counter.dispatch('SET', value);
  }
}
