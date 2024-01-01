import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product/product';
import { GeneralContentDetail } from '../models/general-content/generalContentDetail';
import { ResponseModel } from '../models/responseModel';
import { ProductAdd } from '../models/product/productAdd';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:7029/api/';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + 'products/getall';
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategoryId(generalContentId: number): Observable<ListResponseModel<GeneralContentDetail>> {
    let newPath = this.apiUrl + 'products/getproductsbygeneralcontentid?generalContentId=' + generalContentId;
    return this.httpClient.get<ListResponseModel<GeneralContentDetail>>(newPath);
  }

  getById(productId: number): Observable<Product> {
    let newPath = this.apiUrl + 'products/getbyid?productId=' + productId;
    return this.httpClient.get<Product>(newPath);
  }

  add(product: ProductAdd): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'products/add';
    return this.httpClient.post<ResponseModel>(newPath, product);
  }
}
