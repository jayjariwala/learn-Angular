import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ninjafilter'
})
export class NinjafilterPipe implements PipeTransform {

  transform(ninjas: any, term: any): any {
    //check if it is underfined
    if(term === undefined)
    {
      console.log("it is undefined")
      return ninjas;
    }
    return ninjas.filter( ninja => {
      return ninja.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
