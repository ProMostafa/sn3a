import { Injectable } from '@angular/core';
import { Itechnision } from '../../app/views/interface/itechnision';
import { HttpClient} from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TechnisionService {
  constructor(private http:HttpClient) { }
  getTechnisions():Observable<Itechnision[]>{

    return  this.http.get<Itechnision[]>(`${environment.ApiUrl}/account/get_all_technical/`);
   }

}


