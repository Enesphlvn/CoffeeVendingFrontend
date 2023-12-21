import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralContentResponseModel } from '../models/generalContentResponseModel';

@Injectable({
  providedIn: 'root'
})
export class GeneralContentService {

  apiUrl = "https://localhost:7029/api/generalContents/getall";

  constructor(private httpClient : HttpClient) { }

  getGeneralContents(): Observable<GeneralContentResponseModel> {
    return this.httpClient.get<GeneralContentResponseModel>(this.apiUrl);
  }
}