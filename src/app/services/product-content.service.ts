import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ProductContent } from '../models/productContent';

@Injectable({
  providedIn: 'root'
})
export class ProductContentService {

  apiUrl = "https://localhost:7029/api/productContents/getproductcontentdetails";

  constructor(private httpClient : HttpClient) { }

  getProductContents(): Observable<ListResponseModel<ProductContent>> {
    return this.httpClient.get<ListResponseModel<ProductContent>>(this.apiUrl);
  }
}
