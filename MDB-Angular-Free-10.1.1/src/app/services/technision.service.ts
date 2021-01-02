import { Injectable } from '@angular/core';
import { Itechnision } from '../../app/views/interface/itechnision';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnisionService {
  constructor(private http:HttpClient) { }
  getTechnisions():Observable<Itechnision[]>{

    return  this.http.get<Itechnision[]>(`${environment.ApiUrl}/account/users/get_all_technical/`);
   }

   getTechnisionsByJob(id:number):Observable<Itechnision[]>{

    const httpOptions ={headers:new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*',
       //'Authorization' :'token 158de64c754e5ae5540a3d58a41ad54ed9106bd4'
      
      //  ,'Authorization': localStorage.getItem('token'),
      })};
      

    return  this.http.get<Itechnision[]>(`${environment.ApiUrl}/account/users/get_technical_with_job/`,httpOptions);
   }
}


