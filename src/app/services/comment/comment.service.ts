import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3000/comments'
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }
  get(): Observable<any> {
    return this.http.get(apiUrl)
  }
  getOne(id: Number | String): Observable<any>{
    return this.http.get(apiUrl+`${id}?_expand=category`)
  }
  insert(data: any): Observable<any>{
    return this.http.post(apiUrl, data)
  }
  update(data: any): Observable<any>{
    return this.http.put(apiUrl+data.id, data)
  }
}
