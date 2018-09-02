import {Component, OnInit} from '@angular/core';
import {CocheModel} from "../../models/coche.model";

@Component({
  selector: 'app-formulario-coches',
  templateUrl: './formulario-coches.component.html',
  styleUrls: ['./formulario-coches.component.css']
})
export class FormularioCochesComponent implements OnInit {
  coche: CocheModel;

  constructor() {
    this.coche = new CocheModel('', '', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.coche);
  }
}
