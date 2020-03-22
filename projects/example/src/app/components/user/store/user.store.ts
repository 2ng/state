import { Injectable } from '@angular/core';
import { NgState } from 'state';

export interface User {
  user: string;
  age: number;
}

const initialState: User = {
  user: 'andrey',
  age: 29
};

@Injectable()
export class UserStore extends NgState<User> {
  constructor() {
    super(initialState);
  }

  uppercase() {
    const userName = this.state.get().user;

    this.setState({
      user: userName.toUpperCase()
    });
  }

  lowercase() {
    const userName = this.state.get().user;

    this.setState({
      user: userName.toLowerCase()
    });
  }
}
