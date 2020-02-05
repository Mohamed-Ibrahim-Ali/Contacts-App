import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataListService } from 'src/app/services/data-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  Data:any[] ; 
  Contacts:any[];
  term :string ;
  letters:string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','S','T','U','V','W','X','Y','Z'];
 
  constructor( private ser: DataListService , public _router : Router ) { 
    this.ser.getData().subscribe( res =>   this.Data = res.data);
    this.ser.getContact().subscribe ( res => { this.Contacts = res.data 
      for(let i=0; i<this.Contacts.length; i++) {
        if (this.Contacts[i].image == null){
          this.Contacts[i].image = 'assets/2.jpg'
        } 
      }
    })
}

  go = () => this._router.navigate(['add']);

  ngOnInit() {
  }

}
