import { Injectable } from '@angular/core';
import { Iservice } from '../../app/views/interface/iservice';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getAllServices():Observable<Iservice[]>{

    return  this.http.get<Iservice[]>(`${environment.ApiUrl}/services/`);
   }
   
}
