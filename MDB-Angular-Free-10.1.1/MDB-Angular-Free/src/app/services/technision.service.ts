import { Injectable } from '@angular/core';
import { Itechnision } from '../../app/views/itechnision';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TechnisionService {

  constructor(private http:HttpClient) { }
  getAllProducts():Observable<Itechnision[]>{

    return  this.http.get<Itechnision[]>(`${environment.ApiUrl}/account/users/`);
   }
   
   
   getProductById(pid):Observable<Itechnision>{
   
     return this.http.get<Itechnision>(`${environment.ApiUrl}/account/users/`);
   }
   
   insertProduct(prd:Itechnision):Observable<Itechnision>{
     const httpOptions ={headers:new HttpHeaders({
       'Content-Type': 'application/json',
        'Accept': ' */*'
         // ,'Authorization': 'my-auth-token'
       })};
     return this.http.post<Itechnision>(`${environment.ApiUrl}/account/users/`,prd,httpOptions);
   }
  }


