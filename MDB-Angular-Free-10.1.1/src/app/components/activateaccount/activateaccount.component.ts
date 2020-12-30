import { Component, OnInit ,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServices } from '../../services/auth_service';

@Component({
  selector: 'app-activateaccount',
  templateUrl: './activateaccount.component.html',
  styleUrls: ['./activateaccount.component.scss']
})
export class ActivateaccountComponent implements OnInit {

  token:string;
  show:boolean;
  status:string;
  message:string;
  active:boolean;

  @ViewChild('toast') toast_elem;
  constructor(private activatedRoute: ActivatedRoute , private request_service:ApiServices)
   {
    this.show=false;
    this.status="تفعيل الحساب";
    this.active=false;
    }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.token = params['token'];
     console.log(this.token);// OUTPUT 1534
   });
  }

  activate_account(){

    this.request_service.activate_account(this.token).subscribe(
      res=>this.success(res),
      err=>this.fail(err)
    )
    console.log("activate")
  }

  success(res){
    this.active=true;
    this.status="تم تفعيل الحساب بنجاح";
    this.message=res.message;
    console.log(res.message)
  }

  fail(err){
    this.active=false;
    this.show=true;
    setTimeout(() => {
      this.show=false;
    },3000)
    this.message=err.error.error
    this.status="لم يتم تفعيل الحساب"
    console.log(err.error.error);
  }


}
