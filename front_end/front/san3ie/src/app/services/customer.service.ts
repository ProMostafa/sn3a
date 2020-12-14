import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Icustomer } from '../../app/views/interface/icustomer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getAllCustomers():Observable<Icustomer[]>{

    return  this.http.get<Icustomer[]>(`${environment.ApiUrl}/account/users/`);
   }
   
   
   getCustomerById(pid):Observable<Icustomer>{
   
     return this.http.get<Icustomer>(`${environment.ApiUrl}/account/users/`);
   }
   
   insertCustomer(prd:Icustomer):Observable<Icustomer>{
     const httpOptions ={headers:new HttpHeaders({
       'Content-Type': 'application/json',
        'Accept': ' */*'
         // ,'Authorization': 'my-auth-token'
       })};
     return this.http.post<Icustomer>(`${environment.ApiUrl}/account/users/`,prd,httpOptions);
   }

}
