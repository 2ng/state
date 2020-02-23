import { Component } from '@angular/core';
import { NgStoreService } from 'projects/ng-store/src/public-api';
import { AppState } from '../../appState.interface';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  counter = this._storeService.use('counterStore');

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
