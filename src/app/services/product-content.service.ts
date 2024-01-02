import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ProductContent } from '../models/product-content/productContent';
import { ProductContentAdd } from '../models/product-content/productContentAdd';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponeModel';
import { ProductContentUpdate } from '../models/product-content/productContentUpdate';

@Injectable({
  providedIn: 'root',
})
export class ProductContentService {
  apiUrl = 'https://localhost:7029/api/';

  constructor(private httpClient: HttpClient) {}

  getProductContents(): Observable<ListResponseModel<ProductContent>> {
    let newPath = this.apiUrl + 'productContents/getall';
    return this.httpClient.get<ListResponseModel<ProductContent>>(newPath);
  }

  add(productContent: ProductContentAdd): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'productContents/add';
    return this.httpClient.post<ResponseModel>(newPath, productContent);
  }

  getById(
    productContentId: number
  ): Observable<SingleResponseModel<ProductContent>> {
    let newPath = this.apiUrl + 'productContents/getbyid?productContentId=' + productContentId;
    return this.httpClient.get<SingleResponseModel<ProductContent>>(newPath);
  }

  update(productContent: ProductContentUpdate): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'productContents/update';
    return this.httpClient.put<ResponseModel>(newPath, productContent);
  }
}
