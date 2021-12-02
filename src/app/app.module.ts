import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
//import { ContadorComponent } from './contador/contador/contador.component';

import { HeroeModule } from './heroes/heroes.module';
// import { HeroeComponent } from './heroes/heroe/heroe.component';
// import { ListadoComponent } from './heroes/heroes/listado/listado.component';


@NgModule({
  declarations: [
    AppComponent
   // ContadorComponent
    
  ],
  imports: [
    BrowserModule,
    HeroeModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
