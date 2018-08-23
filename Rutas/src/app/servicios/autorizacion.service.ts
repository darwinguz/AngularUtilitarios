import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {CredencialesService} from "./credenciales.service";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService implements CanActivate {

  constructor(private _credencialesService: CredencialesService,
              private _router: Router,) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('Intentando logearse...');
    const permisos = this._credencialesService.estaLogeado;
    if (permisos) {
      return permisos;
    } else {
      // redirigerle al login
      const url = ['login'];
      alert('No ha iniciado sesion aun!');
      console.log('Redireccionando a Login...');
      this._router.navigate(url);
      return permisos;
    }
  }
}
