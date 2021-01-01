import { Component, OnInit } from '@angular/core';
import { Icustomer } from '../../views/interface/icustomer';
import { Iorder } from '../../views/interface/iorder';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
Customer:Icustomer;
OrderCustomerList:Iorder[];
  constructor() { 
  
  }

  ngOnInit(): void {
    this.Customer={ 
      address:"بنى سويف",
      email:"hom9244.9244@gmail.com",
      password:"8888",
      phone:"01098355960",
      username:"محمد_أشرف",
      first_name:"محمد",
      last_name:"اشرف",
      job:"مصمم ويب",
    }
    this.OrderCustomerList=[{
      status:true,
      date:11,
      description:"خدمة سباكة",
      total_cost:2563,
      technical:2,
      service:2

    }]
  }

}
