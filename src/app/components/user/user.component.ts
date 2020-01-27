import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DispatchFunction } from 'src/app/core/store/models';
import { StoreService } from 'src/app/core/store/store.service';
import { CounterActions } from '../counter/state/counter';
import { User } from './models/user.interface';
import { TEMP_STATE_CONFIG } from './state/temp';
import { UserActions } from './state/user';

@Component({
  selector: 'user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  user$: Observable<User>;
  dispatch: DispatchFunction<UserActions>;
  dispatchCounter: DispatchFunction<CounterActions>;

  omit: () => void;

  constructor(private _storeService: StoreService) {
    const { dispatch, observable } = this._storeService.use('user');
    this.user$ = observable;
    this.dispatch = dispatch;

    const { dispatch: dispatchCounter } = this._storeService.use('counter');
    this.dispatchCounter = dispatchCounter;
  }

  addTempState() {
    const { omit } = this._storeService.add(TEMP_STATE_CONFIG);
    this.omit = omit;
  }

  deleteTempState() {
    this.omit();
  }

  uppercase() {
    this.dispatch('UPPERCASE');
  }

  lowercase() {
    this.dispatch('LOWERCASE');
  }

  increment() {
    this.dispatchCounter('INC');
  }
}
