import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/auth/loginModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponeModel';
import { TokenModel } from '../models/auth/tokenModel';
import { RegisterModel } from '../models/auth/registerModel';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:7029/api/';

  constructor(private httpClient: HttpClient) {}

  login(user: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    let newPath = this.apiUrl + 'auth/login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, user);
  }

  register(user: RegisterModel): Observable<SingleResponseModel<TokenModel>> {
    let newPath = this.apiUrl + 'auth/register';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, user);
  }

  getByMail(email: string): Observable<SingleResponseModel<User>> {
    let newPath = this.apiUrl + 'auth/getbymail?email=' + email;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }

  isAuthentication() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
