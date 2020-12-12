import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myform=this.fb.group({
      Email:['',[Validators.required,Validators.email,Validators.minLength(4)]],
      Password:['',[Validators.required,Validators.minLength(4)]]
    });
 
   }

  Login(){
    console.log(this.myform.value);

  }

}

