import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }

  getPizzas(): Observable<Pizza[]> {
    return this.http
      .get<Pizza[]>(`https://0b127892-a9fd-48bb-ae33-c5b6ca8a30f1.mock.pstmn.io/pizzas/`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  createPizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .post<Pizza>(`/api/pizzas`, payload)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  updatePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .put<Pizza>(`/api/pizzas/${payload.id}`, payload)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  removePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .delete<any>(`/api/pizzas/${payload.id}`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
