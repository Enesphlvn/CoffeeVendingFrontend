import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { GeneralContentDetail } from '../models/generalContentDetail';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  apiUrl = 'https://localhost:7029/api/';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + 'products/getall';
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategoryId(generalContentId:number): Observable<ListResponseModel<GeneralContentDetail>> {
    let newPath = this.apiUrl + 'products/getproductsbygeneralcontentid?generalContentId=' + generalContentId;
    return this.httpClient.get<ListResponseModel<GeneralContentDetail>>(newPath);
  }
}
