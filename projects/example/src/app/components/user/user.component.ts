import { Component } from '@angular/core';
import { Use } from 'projects/ng-store/src/lib/models';
import { NgStoreService } from 'projects/ng-store/src/public-api';
import { AppState } from '../../appState.interface';
import { CounterActions } from '../counter/store/models/counter-actions.type';
import { Counter } from '../counter/store/models/counter.type';
import { UserActions } from './store/models/user-actions.type';
import { User } from './store/models/user.interface';

@Component({
  selector: 'user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  user: Use<User | {}, UserActions> = this._storeService.use('userStore');
  counter: Use<Counter | {}, CounterActions> = this._storeService.use('counterStore');

  constructor(private _storeService: NgStoreService<AppState>) {
    this.user.dispatch('@INIT');
  }

  uppercase() {
    this.user.dispatch('UPPERCASE');
  }

  lowercase() {
    this.user.dispatch('LOWERCASE');
  }

  increment() {
    this.counter.dispatch('INC');
  }
}
