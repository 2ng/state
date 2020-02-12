import { Component } from '@angular/core';
import { Store } from 'src/app/core/store/store.service';
import "reflect-metadata";
import { Temp } from './state/temp';
import { User } from './models/user.interface';
import { Counter } from '../counter/models/counter.type';
import { UseState } from 'src/app/core/decorators/use-state';

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
    this.temp.dispatch('@LAZY_INIT')
  }

  removeTempState() {
    this.temp.dispatch('@DESTROY')
  }
}
