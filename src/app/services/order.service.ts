import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Order } from '../models/order/order';
import { ResponseModel } from '../models/responseModel';
import { OrderAdd } from '../models/order/orderAdd';
import { SingleResponseModel } from '../models/singleResponeModel';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  apiUrl = 'https://localhost:7029/api/';

  constructor(private httpClient: HttpClient) {}

  getOrders(): Observable<ListResponseModel<Order>> {
    let newPath = this.apiUrl + 'orders/getorderdetails';
    return this.httpClient.get<ListResponseModel<Order>>(newPath);
  }

  add(order: OrderAdd): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'orders/add';
    return this.httpClient.post<ResponseModel>(newPath, order);
  }

  getById(orderId: number): Observable<SingleResponseModel<Order>> {
    let newPath = this.apiUrl + 'orders/getbyid?orderId=' + orderId;
    return this.httpClient.get<SingleResponseModel<Order>>(newPath);
  }
}
