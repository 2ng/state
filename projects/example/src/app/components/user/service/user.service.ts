import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '~config/api';
import { UserResponse } from '../models/user-response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  loadUser$() {
    return this._http.get<UserResponse>(api.getUser);
  }
}
