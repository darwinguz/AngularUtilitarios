import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ejemplo'
})
export class EjemploPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let valueOne = parseInt(value);
    let valueTwo = parseInt(args);
    return `La multiplicación: ${valueOne}x${valueTwo}=${valueOne * valueTwo}`;
  }

}
