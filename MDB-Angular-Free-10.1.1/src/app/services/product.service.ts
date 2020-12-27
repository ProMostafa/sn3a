import { Injectable } from '@angular/core';
import { Iproduct} from '../../app/views/interface/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAllProducts():Observable<Iproduct[]>{

    return  this.http.get<Iproduct[]>(`${environment.ApiUrl}/services/`);
   }
}


