import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = "http://localhost:3000/users/"
const baseUrl = "http://localhost:3000/"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<any>{
    return this.http.get(apiUrl)
  }
  getOne(id: number | string): Observable<any>{
    return this.http.get(apiUrl+id)
  }
  update(data: any): Observable<any>{
    return this.http.put(apiUrl+data.id, data)
  }
  signup(data: any): Observable<any>{
    return this.http.post(baseUrl+"signup", data)
  }
  signin(data: any): Observable<any>{
    return this.http.post(baseUrl+"signin", data)
  }
  delete(id: number | string): Observable<any>{
      return this.http.delete(apiUrl+id);
  }
}
