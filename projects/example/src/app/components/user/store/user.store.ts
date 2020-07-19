import { NgState } from '@2ng/state';
import { Injectable } from '@angular/core';
import { exhaustMap, map } from 'rxjs/operators';
import { UserService } from '~components/user/service/user.service';
import { UserFacade } from '~components/user/user.facade';
import { RequestStatus } from '~shared/services/http/class/loading/loading.interface';
import { Request } from '~shared/services/http/class/loading/request';

interface UserState {
  name: string;
  photo: string;
  loading: RequestStatus;
}

@Injectable()
export class UserStore extends NgState<UserState> implements UserFacade {
  // Selectors
  /** @selector Имя пользователя */
  name$ = this.select(state => state.name);

  /** @selector Ссылка на автар пользователя */
  photo$ = this.select(state => state.photo);

  /** @selector Статус запроса */
  loading$ = this.select(state => state.loading);

  // Actions
  /** @action Загружает фото пользователя */
  LOAD_PHOTO = this.pipe(
    exhaustMap(() => this.userService.loadPhoto$()),
    map(({ status, response }) => ({
      photo: response?.photo || this.state.photo,
      loading: status,
    }))
  );

  /** @action Переводит в верхний регистр */
  UPPERCASE = this.pipe(
    map(() => ({
      name: this.state.name.toUpperCase(),
    }))
  );

  /** @action Переводит в нижний регистр */
  LOWERCASE = this.pipe(
    map(() => ({
      name: this.state.name.toLowerCase(),
    }))
  );

  constructor(private userService: UserService) {
    super({
      name: 'andrey',
      photo: null,
      loading: Request.idle().status,
    });
  }

  uppercase() {
    this.dispatch(this.UPPERCASE);
  }

  lowercase() {
    this.dispatch(this.LOWERCASE);
  }

  loadPhoto() {
    this.dispatch(this.LOAD_PHOTO);
  }
}
