import { environment } from './../../environments/environment';
import { Ilogin } from '../../app/views/interface/ilogin';
import { LoginResponse}from '../../app/views/interface/login-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  loginUser(user:Ilogin):Observable<LoginResponse>{
    const httpOptions ={headers:new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*'
       
        // ,'Authorization': 'my-auth-token'
      })};
    return this.http.post<LoginResponse>(`${environment.ApiUrl}/auth/`,user,httpOptions);
  }}
