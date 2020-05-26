import * as fromPizzas from './pizzas.reducer';
import {ActionReducerMap , createSelector , createFeatureSelector } from '@ngrx/store';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;

};

export const reducers : ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
}

export const getProductsState = createFeatureSelector<ProductsState>('products');

//pizza state
export const getPizzaState = createSelector(getProductsState , (state: ProductsState) => state.pizzas);

export const getAllPizzas = createSelector(getPizzaState , fromPizzas.getPizzas);
export const getAllPizzasLoaded = createSelector(getPizzaState , fromPizzas.getPizzasLoaded);
export const getAllPizzasLoading = createSelector(getPizzaState , fromPizzas.getPizzasLoading);
