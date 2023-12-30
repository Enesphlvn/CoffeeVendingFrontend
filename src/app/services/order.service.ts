import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Order } from '../models/order';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl="https://localhost:7029/api/";

  constructor(private httpClient : HttpClient) { }

  getOrders(): Observable<ListResponseModel<Order>> {
    let newPath = this.apiUrl + 'orders/getorderdetails';
    return this.httpClient.get<ListResponseModel<Order>>(newPath);
  }

  orderAdd(order:Order): Observable<ResponseModel>{
    let newPath = this.apiUrl + 'orders/addtest';
    return this.httpClient.post<ResponseModel>(newPath, order);
  }
}
