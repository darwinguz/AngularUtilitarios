import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {st} from "@angular/core/src/render3";

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.css']
})
export class RutaUsuarioComponent implements OnInit {

  idUsuario: number;
  universidad: string;

  constructor(private _activatedRoute: ActivatedRoute) {
    //obtencion de parametros
    this.idUsuario = +this._activatedRoute.snapshot.paramMap.get('userId');
    // this.universidad = this._activatedRoute.snapshot.paramMap.get('universidad');
    //OJO si se quiere actualizar desde el padre se debe usar inputs u observables como aqui:
    this._activatedRoute.params.subscribe(value => {
      console.info(value);
      this.universidad = value['universidad'];
    });


    console.log('paso en el constructor...')
  }

  ngOnInit() {
    console.log('paso en el on init...')
  }

}
