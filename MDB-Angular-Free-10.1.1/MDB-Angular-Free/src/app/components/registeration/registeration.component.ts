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
      is_technical:false,
      password:null
     }
   }

  ngOnInit(): void {
  }
  CreateAccount(){
    console.log("errorr hi")

    // this._ApiCustomer.insertCustomer(this.customer).subscribe(
    //   (data)=>this._router.navigateByUrl('/Register'),
    //   (err)=>console.log(err)


    // )
   }
}
