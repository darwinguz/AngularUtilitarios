import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-strings',
  templateUrl: './strings.component.html',
  styleUrls: ['./strings.component.css']
})
export class StringsComponent implements OnInit {

  nombreCompleto: string;

  constructor() {
    this.nombreCompleto = 'Darwin Guzmán'
  }

  ngOnInit() {
  }

}
