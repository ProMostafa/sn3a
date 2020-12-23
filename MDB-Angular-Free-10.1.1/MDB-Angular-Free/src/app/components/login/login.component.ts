import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ilogin } from '../../views/interface/ilogin';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/views/interface/login-response';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   // myform:FormGroup;
   user:Ilogin;
   response:LoginResponse;
  constructor(private _ApiUser:LoginService,private _router:Router) { 
    this.user={  
      email: " ",
      password:null
     };

     this.response={
       token:" ",
       error:" "
     }
  }

  ngOnInit(): void { }

   // ngOnInit(): void {
  //   this.myform=this.fb.group({
  //     Email:['',[Validators.required,Validators.email,Validators.minLength(4)]],
  //     Password:['',[Validators.required,Validators.minLength(4)]]
  //   });
 
  //  }

  Login(){
    console.log("errorr hi")
    this._ApiUser.loginUser(this.user).subscribe(
      (data)=>this._router.navigateByUrl('/Login'),
      (err)=>console.log(err)


    )

  }

}
