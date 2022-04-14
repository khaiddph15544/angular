import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = "http://localhost:3000/schools/"
@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }
  get(): Observable<any>{
    return this.http.get(apiUrl+`?_embed=archievements`)
  }
  getOne(id: number): Observable<any>{
    return this.http.get(apiUrl+`${id}`)
  }
  insert(data: any): Observable<any>{
    return this.http.post(apiUrl, data)
  }
  update(data: any): Observable<any>{
    return this.http.put(apiUrl+`/${data.id}`, data)
  }
  delete(id: number): Observable<any>{
    return this.http.delete(apiUrl+`${id}`)
  }
}
