import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FechasComponent } from './angular-pipes/fechas/fechas.component';
import { StringsComponent } from './angular-pipes/strings/strings.component';
import { EjemploPipe } from './custom-pipes/ejemplo.pipe';
import { UsoEjemploComponent } from './custom-pipes/uso-ejemplo/uso-ejemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    FechasComponent,
    StringsComponent,
    EjemploPipe,
    UsoEjemploComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
