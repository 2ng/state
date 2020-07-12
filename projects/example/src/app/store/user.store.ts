import { NgEffect, NgState } from '@2ng/state';
import { Injectable } from '@angular/core';
import { debounceTime, delay, map, switchMap, tap } from 'rxjs/operators';
import { UserService } from '~components/user/service/user.service';
import { UserFacade } from '~components/user/user.facade';
import { Loading } from '~shared/class/loading/loading';
import { LoadingState } from '~shared/class/loading/loading.interface';

interface UserState {
  name: string;
  photo: string;
  loading: LoadingState;
}

const initialState: UserState = {
  name: 'andrey',
  photo: null,
  loading: Loading.idle(),
};

@Injectable()
export class UserStore extends NgState<UserState> implements UserFacade {
  name$ = this.select(state => state.name);
  photo$ = this.select(state => state.photo);
  loading$ = this.select(state => state.loading);

  private loadPhotoEffect = new NgEffect(
    tap(() => this.setState({ photo: null, loading: Loading.pending() })),
    delay(2000),
    debounceTime(250),
    switchMap(() => this.userService.loadUser$()),
    map(res => res.photo),
    tap(photo => this.setState({ photo, loading: Loading.success() }))
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
