import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl= environment.apiUrl;
  constructor(private http: HttpClient){}
  insert_user(data:any): Observable<any> {
    return this.http.post<any[]>(this.apiUrl+'/users/user-insert', data);
  } 
  get_user(data:any): Observable<any> {
    return this.http.post<any[]>(this.apiUrl+'/users/user-login', data);
  }
}

