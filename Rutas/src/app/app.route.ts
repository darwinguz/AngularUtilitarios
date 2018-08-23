import {Routes} from "@angular/router";
import {HomeComponent} from "./rutas/home/home.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {NoEncontradoComponent} from "./rutas/no-encontrado/no-encontrado.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {FaqComponent} from "./rutas/faq/faq.component";
import {RutaPerfilComponent} from "./rutas/ruta-perfil/ruta-perfil.component";
import {AutorizacionService} from "./servicios/autorizacion.service";

export const RUTAS_APP: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [
      AutorizacionService
    ]
  ,
    children: [
      {
        path: 'usuario/:userId/:universidad',
        component: RutaUsuarioComponent
      },
      {
        path: 'perfil',
        component: RutaPerfilComponent
      }
    ]
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: 'no-encontrado',
    component: NoEncontradoComponent
  },
  {//cuando la url no tenga nada carga HOME
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {//cuando no exista la ruta (404) se dirige a NOENCONTRADO
    path: '**',
    component: NoEncontradoComponent
  }
];
