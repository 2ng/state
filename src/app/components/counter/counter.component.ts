import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DispatchFunction } from 'src/app/core/store/models';
import { StoreService } from 'src/app/core/store/store.service';
import { Counter } from './models/counter.type';
import { CounterActions } from './state';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  counter$: Observable<Counter>;
  dispatch: DispatchFunction<CounterActions>;

  constructor(private _store: StoreService) {
    const { observable, dispatch, getValue } = this._store.use('counter');
    this.counter$ = observable;
    this.dispatch = dispatch;

    setTimeout(() => console.log(getValue()), 5000);
  }

  increment() {
    this.dispatch('INC');
  }

  decrement() {
    this.dispatch('DEC');
  }

  reset() {
    this.dispatch('INIT');
  }

  set(value) {
    this.dispatch('SET', value);
  }
}
