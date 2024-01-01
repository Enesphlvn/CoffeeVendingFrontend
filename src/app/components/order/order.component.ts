import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {

  orders: Order[];

  constructor(private orderService: OrderService) { }

  ngOnInit():void {
    this.getOrders();
  }

  getOrders(){
    this.orderService.getOrders().subscribe((response) => {
      this.orders = response.data;
    })
  }
}
