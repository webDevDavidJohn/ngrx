import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PizzaDisplayComponent } from 'src/app/products/components/pizza-display/pizza-display.component';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { PizzaItemComponent } from './components/pizza-item/pizza-item.component';
import { PizzaToppingsComponent } from './components/pizza-toppings/pizza-toppings.component';
import { ProductItemComponent } from './containers/product-item/product-item.component';
import { ProductsComponent } from './containers/products/products.component';

import {StoreModule} from '@ngrx/store';
import {reducers} from './store';


@NgModule({
  declarations: [
    PizzaFormComponent,
    PizzaItemComponent,
    PizzaToppingsComponent,
    ProductItemComponent,
    ProductsComponent,
    PizzaDisplayComponent
  ],

  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('products' , reducers)
  ]
})
export class ProductsModule { }
