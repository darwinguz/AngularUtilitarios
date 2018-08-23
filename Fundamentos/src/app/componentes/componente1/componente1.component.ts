import {Component, OnInit} from '@angular/core';
import {Empleado} from "../../modelos/empleado";
import {v} from "@angular/core/src/render3";

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  public empleado1: Empleado;
  public empleado2: Empleado;
  public trabajadores: Array<Empleado>;

  //siempre se ejecuta primero
  constructor() {
    this.empleado1 = new Empleado('Darwin', 22, 'Analista Programador', true, 'red');
    this.empleado2 = new Empleado('Santiago', 15, 'Desarrollador', false, 'pink');
    /*
    this.empleado1.nombre = 'Darwin';
    this.empleado1.cargo = 'Desarrollador';
    this.empleado1.edad = 22;
    this.empleado1.contratado = true;
    */
    this.trabajadores = [
      new Empleado('Cami', 21, 'Electromecanica'),
      new Empleado('Joss', 22, 'Electronica', true, 'blue'),
      new Empleado('Steven', 25, 'Civil', false, 'red'),
      new Empleado('Diego', 19, 'Informatica', false, 'green')
    ];

  }

  //se ejecuta luego del constructor
  ngOnInit() {
    console.log('EMPLEADO: ' + JSON.stringify(this.empleado1));
    console.log('TRABAJADORES: ' + JSON.stringify(this.trabajadores))

    //var vs let
    //la diferencia esta en el alcance var=global ^ let=local
    var v1 = 8;
    var v2 = 15;
    if (v1 == 8) {
      let v1 = 3;
      var v2 = 88;
      console.log('DENTRO DEL IF: ' + v1 + ' y ' + v2)
    }
    console.log('FUERA DEL IF: ' + v1 + ' y ' + v2)
  }

  verCargoEmpleado1() {
    console.log('CARGO EMPLEADO 1: ' + this.empleado1.cargo);
  }

  cambiarContratoEmpleado1() {
    this.empleado1.contratado =
      !this.empleado1.contratado;
  }

  cambiarContratoEmpleado2() {
    this.empleado2.contratado =
      !this.empleado2.contratado;
  }

}
