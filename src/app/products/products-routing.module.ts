import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaDisplayComponent } from 'src/app/products/components/pizza-display/pizza-display.component';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { PizzaItemComponent } from './components/pizza-item/pizza-item.component';
import { PizzaToppingsComponent } from './components/pizza-toppings/pizza-toppings.component';
import { ProductItemComponent } from './containers/product-item/product-item.component';
import { ProductsComponent } from './containers/products/products.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: ':id',
    component: ProductItemComponent,
  },
  {
    path: 'new',
    component: ProductItemComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
