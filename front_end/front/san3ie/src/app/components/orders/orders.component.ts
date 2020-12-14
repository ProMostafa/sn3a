import { Component, OnInit } from '@angular/core';
import { Iorder } from '../../views/interface/iorder';
import { OrderService } from '../../services/order.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  OrderList:Iorder[];
  constructor(private _apiOrder:OrderService) { }

  ngOnInit(): void {
    this._apiOrder.getAllOrders().subscribe(
      //(data)=>console.log(data),
      (data)=>this.OrderList=data,
      (err)=>console.log(err)
    )}

}
