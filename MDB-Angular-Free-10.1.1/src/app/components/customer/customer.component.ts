import { Component, OnInit } from '@angular/core';
import { Icustomer } from '../../views/interface/icustomer';
import { Iorder } from '../../views/interface/iorder';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
Customer:Icustomer;
OrderCustomerList:Iorder[];
constructor(private _apiCustomer:CustomerService) { }
 

  ngOnInit(): void {
    this._apiCustomer.getCustomer().subscribe(
      //(data)=>console.log(data),
      (data)=>this.Customer=data,
      (err)=>console.log(err)
    )
    this.OrderCustomerList=[{
      status:true,
      date:"10-12-2020",
      description:"خدمة سباكة",
      total_cost:2563,
      technical:2,
      service:2

    }]
  }

}
