import { environment } from './../../environments/environment';
import { IsubService } from '/home/hossam/front_end/front/san3ie/src/app/views/interface/isub-service';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubserviceService {

  constructor(private http:HttpClient) { }
  
  getServiceById(pid):Observable<IsubService[]>{
   
     return this.http.get<IsubService[]>(`${environment.ApiUrl}/services/{pid}/get_sub_service/`);
   }
   
}
