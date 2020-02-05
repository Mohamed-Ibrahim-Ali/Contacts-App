import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(Data: any, term: string): any {
    if (term == undefined) {
      return Data;
    } else {
      return Data.filter(function (Data) {
        return Data.firstName.toLowerCase().includes(term.toLowerCase());

      })
    }
  }

}
