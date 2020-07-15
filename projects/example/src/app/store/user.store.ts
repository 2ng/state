import { NgEffect, NgState } from '@2ng/state';
import { Injectable } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { UserService } from '~components/user/service/user.service';
import { UserFacade } from '~components/user/user.facade';
import { Loading } from '~shared/services/http/class/loading/loading';
import { LoadingStatus } from '~shared/services/http/class/loading/loading.interface';

interface UserState {
  name: string;
  photo: string;
  loading: LoadingStatus;
}

const initialState: UserState = {
  name: 'andrey',
  photo: null,
  loading: Loading.idle().status,
};

@Injectable()
export class UserStore extends NgState<UserState> implements UserFacade {
  name$ = this.select(state => state.name);
  photo$ = this.select(state => state.photo);
  loading$ = this.select(state => state.loading);

  get name() {
    return this.state.name;
  }

  private loadPhotoEffect = new NgEffect(
    switchMap(() => this.userService.loadUser$()),
    tap(({ status, response }) =>
      this.setState({
        photo: response?.photo || this.state.photo || null,
        loading: status,
      })
    )
  );

  constructor(private userService: UserService) {
    super(initialState);
  }

  uppercase() {
    this.setState({ name: this.state.name.toUpperCase() });
  }

  lowercase() {
    this.setState({ name: this.state.name.toLowerCase() });
  }

  loadPhoto() {
    this.loadPhotoEffect.next();
  }
}
