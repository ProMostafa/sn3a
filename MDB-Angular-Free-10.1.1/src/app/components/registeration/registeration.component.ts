import { Component, OnInit } from '@angular/core';
import { Icustomer } from '../../views/interface/icustomer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {
  customer:Icustomer;


  constructor(private _ApiCustomer:CustomerService,private _router:Router) {
    this.customer={  
      email: " ",
      username:" ",
      address: " " ,
      phone:null,
      password:null
     }
   }

  ngOnInit(): void {
  }
  CreateAccount(){
    console.log(this.customer);

    this._ApiCustomer.insertCustomer(this.customer).subscribe(
      
      (data)=>this.success(data),
      (err)=>this.fail(err)
    )
   }

   success(res){
     console.log(res)
     this._router.navigateByUrl('/Login')
   }

   fail(err){
     console.log(err)
   }
}
