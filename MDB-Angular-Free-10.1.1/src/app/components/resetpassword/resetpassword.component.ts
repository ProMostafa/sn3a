import { Component, OnInit } from '@angular/core';
import { ApiServices } from '../../services/auth_service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  email:string;
  show:boolean;
  constructor(private activatedRoute: ActivatedRoute , private request_service:ApiServices)
   { 
    this.show=false;
  }

  ngOnInit(): void {

  }

  reset_password(){
    this.request_service.reset_password(this.email).subscribe(
      res=>this.success(res),
      err=>this.fail(err)
    )

    console.log("email send ")
    this.show=!this.show;
    setTimeout(() => {
      this.show=false;
    },3000)
    
  }

  success(res){
    console.log(res)
  }

  fail(err){
    console.log(err);
  }

}
