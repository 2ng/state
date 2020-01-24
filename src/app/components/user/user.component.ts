import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DispatchFunction } from 'src/app/core/store/models';
import { StoreService } from 'src/app/core/store/store.service';
import { CounterActions } from '../counter/state';
import { User } from './models/user.interface';
import { UserActions } from './state';

@Component({
  selector: 'user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  user$: Observable<User>;
  dispatch: DispatchFunction<UserActions>;
  dispatchCounter: DispatchFunction<CounterActions>;

  constructor(private _storeService: StoreService) {
    const { dispatch, observable } = this._storeService.use('user');
    this.user$ = observable;
    this.dispatch = dispatch;

    const { dispatch: dispatchCounter } = this._storeService.use('counter');
    this.dispatchCounter = dispatchCounter;
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
