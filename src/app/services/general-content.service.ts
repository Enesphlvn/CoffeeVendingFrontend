import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { GeneralContent } from '../models/generalContent';

@Injectable({
  providedIn: 'root'
})
export class GeneralContentService {

  apiUrl = "https://localhost:7029/api/";

  constructor(private httpClient : HttpClient) { }

  getGeneralContents(): Observable<ListResponseModel<GeneralContent>> {
    let newPath = this.apiUrl + 'generalContents/getall';
    return this.httpClient.get<ListResponseModel<GeneralContent>>(newPath);
  }
}