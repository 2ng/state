import { Component } from '@angular/core';
import { StoreService } from 'src/app/core/store/store.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  private _userState = this._store.use('user');
  user$ = this._userState.observable;
  dispatch = this._userState.dispatch;
  
  private _counterState = this._store.use('counter');
  dispatchCounter = this._counterState.dispatch;
  
  private _tempState = this._store.use('temp');
  dispatchTemp = this._tempState.dispatch;
  temp$ = this._tempState.observable;

  constructor(private _store: StoreService) {
    setTimeout(() => this.addTempState(), 3000)
    setTimeout(() => this.removeTempState(), 6000)
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

  addTempState() {
    this.dispatchTemp('@LAZY_INIT')
  }

  removeTempState() {
    this.dispatchTemp('@DESTROY')
  }
}
