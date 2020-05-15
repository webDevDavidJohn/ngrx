import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ProductsModule { }
