import { Component } from '@angular/core';
import { NgStoreService } from 'projects/ng-store/src/public-api';
import { AppState } from '../../appState.interface';

@Component({
  selector: 'user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  user = this._storeService.use('userStore');
  counter = this._storeService.use('counterStore');

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
