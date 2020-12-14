import { environment } from './../../environments/environment';
import { Ilogin } from '../../app/views/interface/ilogin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  getAllProducts():Observable<Ilogin[]>{

    return  this.http.get<Ilogin[]>(`${environment.ApiUrl}/auth/`);
   }
   
   
   getProductById(pid):Observable<Ilogin>{
   
     return this.http.get<Ilogin>(`${environment.ApiUrl}/auth/`);
   }
   
   insertProduct(prd:Ilogin):Observable<Ilogin>{
     const httpOptions ={headers:new HttpHeaders({
       'Content-Type': 'application/json',
        'Accept': ' */*'
         // ,'Authorization': 'my-auth-token'
       })};
     return this.http.post<Ilogin>(`${environment.ApiUrl}/auth/`,prd,httpOptions);
   }
}
