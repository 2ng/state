import { Component } from '@angular/core';
import { UseState } from 'projects/ng-store/src/public-api';

@Component({
  selector: 'user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  @UseState('temp') temp;
  @UseState('user') user;
  @UseState('counter') counter;

  uppercase() {
    this.user.dispatch('UPPERCASE');
  }

  lowercase() {
    this.user.dispatch('LOWERCASE');
  }

  increment() {
    this.counter.dispatch('INC');
  }

  addTempState() {
    this.temp.dispatch('@LAZY_INIT');
  }

  removeTempState() {
    this.temp.dispatch('@DESTROY');
  }
}
