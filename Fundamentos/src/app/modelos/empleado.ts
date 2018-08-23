export class Empleado {

  /*
  public nombre: string;
  public edad: number;
  public cargo: string;
  public contratado: boolean;

  constructor(nombre, edad, cargo, contratado) {
    this.nombre = nombre;
    this.edad = edad;
    this.cargo = cargo;
    this.contratado = contratado;
  }*/

  //este contructor hace lo mismo q el de arriba

  constructor(public nombre: string,
              public edad: number,
              public cargo: string,
              public contratado?: boolean,
              public color?:string) {
  }

  /*
  public nombre: string;
  public edad: number;
  public cargo: string;
  public contratado: boolean;
  */

}

