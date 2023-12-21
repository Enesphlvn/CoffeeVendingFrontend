import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderResponseModel } from '../models/orderResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl="https://localhost:7029/api/orders/getorderdetails";

  constructor(private httpClient : HttpClient) { }

  getOrders(): Observable<OrderResponseModel> {
    return this.httpClient.get<OrderResponseModel>(this.apiUrl);
  }
}
