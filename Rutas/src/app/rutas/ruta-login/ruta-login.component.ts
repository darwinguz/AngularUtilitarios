import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CredencialesService} from "../../servicios/credenciales.service";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.css']
})
export class RutaLoginComponent implements OnInit {
  password = 'activate';

  constructor(private _credencialesService: CredencialesService,
              private _router: Router,
  ) {
  }

  ngOnInit() {
  }

  login() {
    this._credencialesService
      .login(this.password);
    const rutaHomeUsuario = [
      '/home' // Segmentos
    ];
    this._router.navigate(rutaHomeUsuario);

  }

}
