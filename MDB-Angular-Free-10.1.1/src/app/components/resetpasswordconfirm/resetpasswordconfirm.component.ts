import { Component, OnInit } from '@angular/core';
import { ApiServices } from '../../services/auth_service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetpasswordconfirm',
  templateUrl: './resetpasswordconfirm.component.html',
  styleUrls: ['./resetpasswordconfirm.component.scss']
})
export class ResetpasswordconfirmComponent implements OnInit {

  show:boolean;
  password1:string;
  password2:string;
  context:object;
  constructor(private activatedRoute: ActivatedRoute , private request_service:ApiServices) { 
    this.show=false;
    this.context={
      'token':'',
      'uid64':'',
      'password':''
    }
  }

  ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe(params => {
      this.context['token'] = params['token'];
      this.context['uid64'] = params['uid64'];
      console.log(this.context['token']);
      console.log(this.context['uid64']);
    });

  }

  set_new_password(){
    this.context['password']=this.password1;
    this.request_service.reset_new_password(this.context).subscribe(
      res=>this.success(res),
      err=>this.fail(err)
    )
    this.show=true;
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
