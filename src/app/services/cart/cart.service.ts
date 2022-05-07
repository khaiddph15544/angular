import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3000/cart'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  get(): Observable<any>{
    return this.http.get(apiUrl+`?_expand=product&_expand=user`)
  }
  getByUser(userId: number | string): Observable<any>{
    return this.http.get(apiUrl+`?userId=${userId}&_expand=product`)
  }
}
