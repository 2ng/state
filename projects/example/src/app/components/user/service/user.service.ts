import { Injectable } from '@angular/core';
import { api } from '~config/api';
import { HttpService } from '~shared/services/http/http.service';
import { UserResponse } from '../models/user-response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpService) {}

  loadUser$() {
    return this._http.get<UserResponse>(api.getUser);
  }
}
