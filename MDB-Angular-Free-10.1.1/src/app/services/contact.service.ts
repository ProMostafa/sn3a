import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Icontact} from '../../app/views/interface/icontact';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http:HttpClient) { }

 ContactUser(contact:Icontact):Observable<Icontact>{
    const httpOptions ={headers:new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })};
    return this.http.post<Icontact>(`${environment.ApiUrl}/auth/`,contact,httpOptions);
  }
}

