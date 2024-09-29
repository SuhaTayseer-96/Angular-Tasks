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

  //getsubServices(id: any): Observable<any> {
  //  return this.http.get<any>(`${this.staticData}Subservices/getSubSerById/${id}`);
  //}
}
