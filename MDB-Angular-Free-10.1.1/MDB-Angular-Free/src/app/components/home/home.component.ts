import { Component, OnInit } from '@angular/core';
import { Icontact } from '../../views/interface/icontact';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
contact:Icontact;
  constructor(private _ApiContact:ContactService,private _router:Router) { 
    this.contact={
      id:null,
      name:" ",
      phone:null,
      email:" ",
     message:" ",
      company:" "

    }

  }

  ngOnInit(): void {
  }
  Contact(){
    this._ApiContact.ContactUser(this.contact).subscribe(
      (data)=>this._router.navigateByUrl('Contact'),
      (err)=>console.log(err)
  
  
    )
  
  }
  

}


  

