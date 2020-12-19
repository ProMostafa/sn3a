import { environment } from './../../environments/environment';
import { Iorder } from '../../app/views/interface/iorder';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  getAllOrders():Observable<Iorder[]>{

    return  this.http.get<Iorder[]>(`${environment.ApiUrl} `);
   }
   
   
   getOrderById(pid):Observable<Iorder>{
   
     return this.http.get<Iorder>(`${environment.ApiUrl} `);
   }
   
   insertOrder(prd:Iorder):Observable<Iorder>{
     const httpOptions ={headers:new HttpHeaders({
       'Content-Type': 'application/json',
        'Accept': ' */*'
         // ,'Authorization': 'my-auth-token'
       })};
     return this.http.post<Iorder>(`${environment.ApiUrl} `,prd,httpOptions);
   }
}