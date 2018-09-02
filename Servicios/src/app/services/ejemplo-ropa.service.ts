import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EjemploRopaService {
  private readonly ropas: Array<string>;

  constructor() {
    this.ropas = ['Blue Jean', 'Camiseta de rayas rojas', 'Media naranja'];
  }

  getRopas(): Array<string> {
    return this.ropas;
  }

  agregarRopa(ropa: string): Array<string> {
    this.ropas.push(ropa);
    return this.getRopas();
  }

  eliminarRopa(indice: number): Array<string> {
    if (indice > -1 && indice < this.ropas.length) {
      this.ropas.splice(indice, 1); //splice retorna el valor del elemento eliminado
      return this.getRopas();
    } else {
      return this.getRopas();
    }
  }
}
