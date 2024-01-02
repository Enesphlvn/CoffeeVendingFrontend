import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { UserOperationClaim } from '../models/user-operation-claim/userOperationClaim';
import { UserOperationClaimAdd } from '../models/user-operation-claim/userOperationClaimAdd';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponeModel';
import { UserOperationClaimUpdate } from '../models/user-operation-claim/userOperationClaimUpdate';

@Injectable({
  providedIn: 'root',
})
export class UserOperationClaimService {
  apiUrl = 'https://localhost:7029/api/';

  constructor(private httpClient: HttpClient) {}

  getUserOperationClaims(): Observable<ListResponseModel<UserOperationClaim>> {
    let newPath = this.apiUrl + 'userOperationClaims/getall';
    return this.httpClient.get<ListResponseModel<UserOperationClaim>>(newPath);
  }

  add(userOperationClaim: UserOperationClaimAdd): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'userOperationClaims/add';
    return this.httpClient.post<ResponseModel>(newPath, userOperationClaim);
  }

  getById(userOperationClaimId: number):Observable<SingleResponseModel<UserOperationClaim>>{
    let newPath = this.apiUrl + 'userOperationClaims/getbyid?userOperationClaimId=' + userOperationClaimId;
    return this.httpClient.get<SingleResponseModel<UserOperationClaim>>(newPath);
  }

  update(userOperationClaim: UserOperationClaimUpdate): Observable<ResponseModel>{
    let newPath = this.apiUrl + 'userOperationClaims/update';
    return this.httpClient.put<ResponseModel>(newPath, userOperationClaim);
  }
}
