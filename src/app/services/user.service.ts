import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { User } from '../models/user/user';
import { SingleResponseModel } from '../models/singleResponeModel';
import { ResponseModel } from '../models/responseModel';
import { PasswordUpdate } from '../models/user/passwordUpdate';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'https://localhost:7029/api/';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<ListResponseModel<User>> {
    let newPath = this.apiUrl + 'users/getall';
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }

  getById(userId: number): Observable<SingleResponseModel<User>> {
    let newPath = this.apiUrl + 'users/getbyid?userId=' + userId;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }

  getByMail(email: string): Observable<SingleResponseModel<User>> {
    let newPath = this.apiUrl + 'users/getbymail?email=' + email;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }

  update(user: User): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'users/update';
    return this.httpClient.put<ResponseModel>(newPath, user);
  }

  passwordUpdate(password: PasswordUpdate): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'users/updatepassword';
    return this.httpClient.put<ResponseModel>(newPath, password);
  }
}
