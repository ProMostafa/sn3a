import { Component, OnInit } from '@angular/core';
import { Icustomer } from '../../views/interface/icustomer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  customer:Icustomer;
  constructor(private _ApiCustomer:CustomerService,private _router:Router) { 
    this.customer={  
    email: " ",
    username:" ",
    address: " " ,
    phone:null,
    img:" ",
    is_technical:null,
    password:null
   }
  }
  ngOnInit(): void {
  }

  CreateOrder(){

    this._ApiCustomer.insertCustomer(this.customer).subscribe(
      (data)=>this._router.navigateByUrl('/Customer'),
      (err)=>console.log(err)


    )
   }
}