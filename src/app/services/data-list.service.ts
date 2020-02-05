import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataListService {

  constructor( private _http: HttpClient ) { }

  getData():Observable <any> {
    return this._http.get("../assets/recent-contact.json");
  }
  getContact():Observable <any> {
    return this._http.get("../assets/contacts.json");
  }
}
