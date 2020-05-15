import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products/products.module';
//store

import { StoreModule , MetaReducer} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { PizzaDisplayComponent } from './products/components/pizza-display/pizza-display.component';


const environment = {
  development: true,
  production: false,
};


export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];


@NgModule({
  declarations: [
    AppComponent,
    PizzaDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    environment.development ? StoreDevtoolsModule.instrument() : [],
    ProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
