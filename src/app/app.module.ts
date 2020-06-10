import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { ChildCarsComponent } from './components/child-cars/child-cars.component';
import { WybierzOsobeComponent } from './components/wybierz-osobe/wybierz-osobe.component';
import { WyswietlOsobeComponent } from './components/wyswietl-osobe/wyswietl-osobe.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    ChildCarsComponent,
    WybierzOsobeComponent,
    WyswietlOsobeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
