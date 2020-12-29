import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Isubproduct } from '../../app/views/interface/isubproduct';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubproductService {

  constructor(private http:HttpClient) { }
  getAllProducts():Observable<Isubproduct[]>{

    return  this.http.get<Isubproduct[]>(`${environment.ApiUrl}/products/`);
   }

 
}


  
    
