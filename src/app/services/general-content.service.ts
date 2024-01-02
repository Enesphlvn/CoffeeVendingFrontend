import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { GeneralContent } from '../models/general-content/generalContent';
import { GeneralContentAdd } from '../models/general-content/generalContentAdd';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponeModel';

@Injectable({
  providedIn: 'root',
})
export class GeneralContentService {
  apiUrl = 'https://localhost:7029/api/';

  constructor(private httpClient: HttpClient) {}

  getGeneralContents(): Observable<ListResponseModel<GeneralContent>> {
    let newPath = this.apiUrl + 'generalContents/getall';
    return this.httpClient.get<ListResponseModel<GeneralContent>>(newPath);
  }

  add(generalContent: GeneralContentAdd): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'generalContents/add';
    return this.httpClient.post<ResponseModel>(newPath, generalContent);
  }

  getById(generalContentId: number):Observable<SingleResponseModel<GeneralContent>>{
    let newPath = this.apiUrl + 'generalContents/getbyid?generalContentId=' + generalContentId;
    return this.httpClient.get<SingleResponseModel<GeneralContent>>(newPath);
  }

  update(generalContent: GeneralContent): Observable<ResponseModel>{
    let newPath = this.apiUrl + 'generalContents/update';
    return this.httpClient.put<ResponseModel>(newPath, generalContent);
  }
}
