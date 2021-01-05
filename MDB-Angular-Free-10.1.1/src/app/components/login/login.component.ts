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
   show:boolean;

  constructor(private _ApiUser:LoginService,private _router:Router) { 
    this.show=false;
    this.user={  
      username: " ",
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
    // console.log("errorr hi")
    this._ApiUser.loginUser(this.user).subscribe(
      (data)=>this.success(data),
      (err)=>this.fail(err)
    )
  }
     

  success(res){
    localStorage.setItem('token',res['token'])
    this._router.navigateByUrl('/Content')
    
  }

  fail(err){
    this.show=true;
    setTimeout(() => {
      this.show=false;
    },5000)
    
    console.log(err['error'])
    //alert("hhhhhhhhhhhhhhhhhhh")
    

  }

}
