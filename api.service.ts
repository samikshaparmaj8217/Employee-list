import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = "http://localhost:8000/"


  constructor(private http: HttpClient) { }

  getAdmin(path: any, data: any): Observable<any> {
    return this.http.post(this.baseUrl + path, data);
  }

  post(http:string, data:any){
    const headers = {'Content-type':'application/json'};
    const body =  JSON.stringify(data);
    return this.http.post(this.baseUrl + http,body,{'headers': headers});
  }
}
