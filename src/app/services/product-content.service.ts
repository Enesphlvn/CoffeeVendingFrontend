import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductContentResponseModel } from '../models/productContentResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductContentService {

  apiUrl = "https://localhost:7029/api/productContents/getproductcontentdetails";

  constructor(private httpClient : HttpClient) { }

  getProductContents(): Observable<ProductContentResponseModel> {
    return this.httpClient.get<ProductContentResponseModel>(this.apiUrl);
  }
}
