import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Contacts: any, term: string): any {
    if (term == undefined) {
      return Contacts;
    } else {
      return Contacts.filter(function (Contacts) {
        return Contacts.firstName.toLowerCase().includes(term.toLowerCase());

      })
    }
  }

}
