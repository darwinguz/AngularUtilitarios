import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredencialesService {
  estaLogeado = false;

  constructor() {
  }

  login(password: string) {
    if (password === 'activate') {
      this.estaLogeado = true;
    } else {
      this.estaLogeado = false;
    }

  }
}
