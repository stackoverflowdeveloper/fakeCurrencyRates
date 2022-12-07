import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyRatesTableComponent } from './currency-rates-table/currency-rates-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyRatesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
