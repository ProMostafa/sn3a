import { environment } from './../../environments/environment';
import { Ilogin } from '../../app/views/interface/ilogin';
import { Login_Response}from '../../app/views/interface/login-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  
  loginUser(user:Ilogin):Observable<Login_Response>{
    const httpOptions ={headers:new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*'
       
        // ,'Authorization': 'my-auth-token'
      })};
    return this.http.post<Login_Response>(`${environment.ApiUrl}/auth/`,user,httpOptions);
  }}
