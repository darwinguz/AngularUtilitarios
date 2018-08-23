import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: number;
  universidad: string;

  constructor(private _router: Router
  ) {
    this.id = -1;
    this.universidad = 'sin universidad';
  }

  ngOnInit() {
  }

  goToUsuario() {
    const rutaHomeUsuario = [
      '/home', // Segmentos
      'usuario', // Segmentos
      this.id, // Segmentos
      this.universidad // Segmentos
    ];
    this._router.navigate(rutaHomeUsuario);
  }
}
