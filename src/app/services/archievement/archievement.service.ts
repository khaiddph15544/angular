import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = "http://localhost:3000/archievements/"
@Injectable({
  providedIn: 'root'
})
export class ArchievementService {

  constructor(private http: HttpClient) { }
  get(): Observable<any>{
    return this.http.get(apiUrl+`?_expand=school`)
  }
  getOne(id: number): Observable<any>{
    return this.http.get(apiUrl+`${id}?_expand=school`)
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
