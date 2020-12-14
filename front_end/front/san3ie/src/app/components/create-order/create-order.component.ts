import { Component, OnInit } from '@angular/core';
import { Iorder } from '../../views/interface/iorder';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  order:Iorder;
  constructor(private _ApiOrder:OrderService,private _router:Router) {
    this.order={
      id:null,
   status:null,
   date:null,
   description:" ",
   total_cost:null,
   create_at:null,
   customer:null,
   technical:null,
   service:null
   }
  }

  ngOnInit(): void {
  }
  CreateOrder(){

    this._ApiOrder.insertOrder(this.order).subscribe(
      (data)=>this._router.navigateByUrl('/Orders'),
      (err)=>console.log(err)


    )
   }
}
