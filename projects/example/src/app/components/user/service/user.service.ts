import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '~config/api';
import { UserResponse } from '../models/user-response';
import { HttpService } from '~shared/services/http.service';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpService) {}

  loadUser$() {
    return this._http.get<UserResponse>(api.getUser);
  }
}
