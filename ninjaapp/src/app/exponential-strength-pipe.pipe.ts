import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrengthPipe'
})
export class ExponentialStrengthPipePipe implements PipeTransform {

  transform(value: number, exponent: string): any {
    let exp = parseFloat(exponent);
    return Math.pow(value,isNaN(exp) ? 1 : exp);
  }

}
