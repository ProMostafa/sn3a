import { Component, OnInit } from '@angular/core';
// import {FormControl, FormGroup, Validators} from "@angular/forms";
// import { Ilogin } from '../../views/interface/ilogin';
// import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // user:Ilogin;
  // customer:Icustomer;
  login:boolean;
constructor(private _router:Router){
  this.login=false;
}
  // constructor(private _ApiCustomer:CustomerService,private _ApiUser:LoginService,private _router:Router) { 
    // this.user={  
    //   email: " ",
    //   password:null
    //  };
    //  this.customer={  
    //   email: " ",
    //   username:" ",
    //   address: " " ,
    //   phone:null,
    //   img:" ",
    //   is_technical:false,
    //   password:null
    //  };
  

  ngOnInit(): void { 
    if (localStorage.getItem('token'))
        {
          this.login=true
          console.log('login')
        }

  }
  // Login(){
  //   this._ApiUser.loginUser(this.user).subscribe(
  //     (data)=>this._router.navigateByUrl('/Login'),
  //     (err)=>console.log(err)

  //   )
  // }
  // CreateAccount(){
  //   this._ApiCustomer.insertCustomer(this.customer).subscribe(
  //     (data)=>this._router.navigateByUrl('/Customer'),
  //     (err)=>console.log(err)
  //   )
  //  }

  checkLogin(){
    if (localStorage.getItem('token'))
      return true
    return false
  }
  logout(){
    localStorage.removeItem('token')
    this._router.navigateByUrl('/Login')
    this.login=false;
  }

}