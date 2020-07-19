import isEqual from '@2utils/is-equal';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';
import { UserService } from '~components/user/service/user.service';
import { UserFacade } from '~components/user/user.facade';
import { Request } from '~shared/services/http/class/loading/request';
import { RequestStatus } from '~shared/services/http/class/loading/loading.interface';

@Injectable()
export class UserBehaviorSubjectStore implements UserFacade {
  private _name = new BehaviorSubject('andrey');
  name$ = this._name.asObservable().pipe(distinctUntilChanged());

  private _photo = new BehaviorSubject<string>(null);
  photo$ = this._photo.asObservable().pipe(distinctUntilChanged());

  private _loading = new BehaviorSubject<RequestStatus>(Request.idle().status);
  loading$ = this._loading.asObservable().pipe(distinctUntilChanged(isEqual));

  get name() {
    return this._name.value;
  }

  private loadPhotoEffect = new Subject();

  constructor(private userService: UserService) {
    this.loadPhotoEffect
      .pipe(switchMap(() => this.userService.loadPhoto$()))
      .subscribe(({ status, response }) => {
        if (response) {
          this._photo.next(response.photo);
        }

        this._loading.next(status);
      });
  }

  uppercase() {
    this._name.next(this._name.value.toUpperCase());
  }

  lowercase() {
    this._name.next(this._name.value.toLowerCase());
  }

  loadPhoto() {
    this.loadPhotoEffect.next();
  }
}
