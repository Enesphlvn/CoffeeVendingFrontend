import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { User } from '../models/user/user';
import { SingleResponseModel } from '../models/singleResponeModel';

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
}
