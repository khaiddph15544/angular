import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = "http://localhost:3000/categories/"
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(apiUrl)
  }
  getOne(id: Number | String): Observable<any>{
    return this.http.get(apiUrl+id)
  }
  insert(data: any): Observable<any>{
    return this.http.post(apiUrl, data)
  }
  update(data: any): Observable<any>{
    return this.http.put(apiUrl+data.id, data)
  }
  delete(id: Number | String): Observable<any>{
    return this.http.delete(apiUrl+id)
  }
  getProductByCate(categoryId: Number | String): Observable<any>{
    return this.http.get(apiUrl+`${categoryId}?_embed=products`)
  }
  getProductBySlug(slug: String): Observable<any>{
    return this.http.get(apiUrl+`?slug=${slug}&_embed=products`)
  }
}
