import { Component, OnInit } from '@angular/core';
import { Icontact } from '../../views/interface/icontact';
import { ContactService } from '../../services/contact.service';
import { ApiServices } from '../../services/auth_service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
// contact:Icontact;

  context:object;
  email:string;
  subject:string;
  message:string;
  constructor(private _ApiContact:ContactService,private _router:Router ,private request_service:ApiServices) { 
    // this.contact={
    //   id:null,
    //   name:" ",
    //   phone:null,
    //   email:" ",
    //  message:" ",
    //   company:" "

    // }

  }

  ngOnInit(): void {
  }
  // Contact(){
  //   this._ApiContact.ContactUser(this.contact).subscribe(
  //     (data)=>this._router.navigateByUrl('Contact'),
  //     (err)=>console.log(err)
  
  
  //   )
  
  //}

  send_message(){
    this.request_service.send_message({'email':this.email,'subject':this.subject,'message':this.message}).subscribe(
      res=>this.success(res),
      err=>this.fail(err)
    )
  }
  
  success(res){
    console.log(res)
  }

  fail(err){
    console.log(err);
  }

}


  

