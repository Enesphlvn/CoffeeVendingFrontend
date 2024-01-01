import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OperationClaimAdd } from '../models/operation-claim/operationClaimAdd';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { OperationClaim } from '../models/operation-claim/operationClaim';

@Injectable({
  providedIn: 'root',
})
export class OperationClaimService {
  apiUrl = 'https://localhost:7029/api/';

  constructor(private httpClient: HttpClient) {}

  getOperationClaims(): Observable<ListResponseModel<OperationClaim>> {
    let newPath = this.apiUrl + 'operationClaims/getall';
    return this.httpClient.get<ListResponseModel<OperationClaim>>(newPath);
  }

  add(operationClaim: OperationClaimAdd): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'operationClaims/add';
    return this.httpClient.post<ResponseModel>(newPath, operationClaim);
  }
}
