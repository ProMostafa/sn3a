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
  show:boolean;
  show1:boolean;


  constructor(private _ApiCustomer:CustomerService,private _router:Router) {
    this.show=false;
    this.show1=false;
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
     this.show1=true;
     setTimeout(() => {
       this.show1=false;
     },3000)
     setTimeout(() => {
       this._router.navigateByUrl('/Login');
     },3000)
   }

   fail(err){
    this.show=true;
    setTimeout(() => {
      this.show=false;
    },5000)
     console.log(err)
   }
}
