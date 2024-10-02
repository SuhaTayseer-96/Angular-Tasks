import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class URLService {

  constructor(private http: HttpClient) { }
  staticData = "https://localhost:7016/api"
  

  getServices(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/services/getservices`);
  }

  getsubServices(id:any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Subservices/getSubSerBySerId/${id}`);
  }

  getsubSubscriptions(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Subscriptions`)
  }
  addusersub(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData }/UserSub`, data);
  }


  addUser(data: any): Observable<any> {
    return this.http.post(`https://localhost:7016/api/User`, data);

  }

  user(data: any): Observable<any> {
    return this.http.post(`https://localhost:7016/api/User/login`, data);

  }

  addService(data: any): Observable<any> {
    return this.http.post(`${this.staticData}/Services/AddService`, data)

  }

}
