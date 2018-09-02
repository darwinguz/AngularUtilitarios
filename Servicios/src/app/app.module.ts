import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EjemploRopaComponent} from './components/ejemplo-ropa/ejemplo-ropa.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemploRopaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
