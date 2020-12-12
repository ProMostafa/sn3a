import { environment } from './../../environments/environment';
import { Iservice } from '/home/hossam/front_end/front/san3ie/src/app/views/interface/iservice';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getAllServices():Observable<Iservice[]>{

    return  this.http.get<Iservice[]>(`${environment.ApiUrl}/services/`);
   }
   
}
