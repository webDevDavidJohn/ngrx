import { Injectable } from '@angular/core';
import { Effect , Actions, ofType} from '@ngrx/effects';
import * as pizzaActions from '../actions/pizzas.action';
import {switchMap , map, catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of } from "rxjs";
import {PizzaService} from '../../services/pizza.service';


@Injectable()
export class PizzasEffects {


  constructor(private actions$: Actions , private pizzaService: PizzaService) {}


  // loadPizzas$ = this.actions$.pipe(
  //   ofType(pizzaActions.LOAD_PIZZAS),
  //   switchMap( (action: pizzaActions.LoadPizzas) =>  {
  //     return this.pizzaService.getPizzas().pipe(
  //       map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
  //       catchError( error => of(new pizzaActions.LoadPizzasFail(error)))
  //     );
  //   })
  // );


  @Effect()
 loadPizzas$ = this.actions$.pipe(
    ofType(pizzaActions.LOAD_PIZZAS),
    switchMap((action: pizzaActions.LoadPizzas) => {
      return this.pizzaService
        .getPizzas()
        .pipe(
          map((pizzas) => {
           return new pizzaActions.LoadPizzasSuccess(pizzas);
          }),
          catchError((error) => {
            console.log('error' , error);
            return of(error);
          })
        );
    })
  );
}

