import { Injectable } from '@angular/core';
import {Effect , Actions, ofType} from '@ngrx/effects';
import * as pizzaActions from '../actions/pizzas.action';
import {switchMap} from 'rxjs/operators';
import {PizzaService} from '../../services/pizza.service';


@Injectable()
export class PizzasEffects {


  constructor(private actions$ : Actions , private pizzaService: PizzaService) {}

  @Effect()
  loadPizzas$ = this.actions$.pipe(
    ofType(pizzaActions.LOAD_PIZZAS)
    switchMap( () => {

    })
  );


}

