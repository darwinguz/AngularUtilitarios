import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fechas',
  templateUrl: './fechas.component.html',
  styleUrls: ['./fechas.component.css']
})
export class FechasComponent implements OnInit {

  fechaActual: Date;

  constructor() {
    this.fechaActual = new Date();
    // this.fechaActual = new Date(2018, 3, 22);//mes = 12 - 1
  }

  ngOnInit() {
  }

}
