import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '../views/auth_response'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  
  export class ApiServices {
  
    body:object;
    constructor(private http:HttpClient) { }

  activate_account(token):Observable<Response>{
  
    return this.http.get<Response>(`${environment.ApiUrl}/account/email_verify/?token=${token}`);
  }


  reset_password(email):Observable<Response>{
    this.body=
    {
      'email':email
    }
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json','Accept':' */*'
      //,'Authorization': 'my-auth-token'
      })};

      return this.http.post<Response>(`${environment.ApiUrl}/account/reset_password/`,
      this.body,httpOptions)
  
  }

  reset_new_password(context):Observable<Response>{
    console.log(context)
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json','Accept':' */*'
      //,'Authorization': 'my-auth-token'
      })};

      return this.http.patch<Response>(`${environment.ApiUrl}/account/password_reset_complete/`,
      context,httpOptions)
  
  }

  send_message(context):Observable<Response>{
    console.log(context)
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json','Accept':' */*'
      //,'Authorization': 'my-auth-token'
      })};

      return this.http.post<Response>(`${environment.ApiUrl}/account/send_message/`,
      context,httpOptions)
  
  }

  }