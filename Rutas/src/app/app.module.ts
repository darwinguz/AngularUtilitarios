import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.route";
import {RutaUsuarioComponent} from './rutas/ruta-usuario/ruta-usuario.component';
import {HomeComponent} from './rutas/home/home.component';
import {RutaPerfilComponent} from './rutas/ruta-perfil/ruta-perfil.component';
import {FaqComponent} from './rutas/faq/faq.component';
import {RutaLoginComponent} from './rutas/ruta-login/ruta-login.component';
import {NoEncontradoComponent} from './rutas/no-encontrado/no-encontrado.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RutaUsuarioComponent,
    HomeComponent,
    RutaPerfilComponent,
    FaqComponent,
    RutaLoginComponent,
    NoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    //para implementar rutas
    RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
