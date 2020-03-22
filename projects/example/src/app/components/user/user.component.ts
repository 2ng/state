import { Component } from '@angular/core';
import {UserStore} from './store/user.store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserStore]
})
export class UserComponent {
  user = this.userStore.state.changes('user');

  constructor(private userStore: UserStore) {}

  uppercase() {
    this.userStore.uppercase();
  }

  lowercase() {
    this.userStore.lowercase();
  }
}
