import { Component, OnInit } from '@angular/core';
import { Iorder } from '../../views/interface/iorder';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute,private _apiOrder:OrderService) { }
  order:Iorder;


  ngOnInit(): void { let pid=this._activatedRoute.snapshot.params['id'];
  this._apiOrder.getOrderById(pid).subscribe(
    (res)=>this.order=res,
    (err)=>console.log(err)
  )}

}
