
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Topping } from '../../products/models/toppings.model';

@Injectable({
  providedIn: 'root'
})
export class ToppingsService {

  constructor(private http: HttpClient) { }

  getToppings(): Observable<Topping[]> {
    return this.http
      .get<Topping[]>(`/api/toppings`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
