import {Component, OnInit} from '@angular/core';
import {EjemploRopaService} from "../../services/ejemplo-ropa.service";

@Component({
  selector: 'app-ejemplo-ropa',
  templateUrl: './ejemplo-ropa.component.html',
  styleUrls: ['./ejemplo-ropa.component.css']
})
export class EjemploRopaComponent implements OnInit {
  ropas: Array<string>;

  constructor(private _ejemploRopaService: EjemploRopaService) {
    this.ropas = _ejemploRopaService.getRopas();
  }

  ngOnInit() {
  }

  agregar(ropa: string) {
    this.ropas = this._ejemploRopaService.agregarRopa(ropa);
  }

  eliminar(indice) {
    this.ropas = this._ejemploRopaService.eliminarRopa(indice);
  }
}
