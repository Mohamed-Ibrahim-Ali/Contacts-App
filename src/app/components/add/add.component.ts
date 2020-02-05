import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Add } from 'src/app/Add.Interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  Add:Add[] = [];
  photoUrl:any ;
  More:any[];

  constructor( public _router: Router) { 
  }

  url = (p) => this.photoUrl = p.value;

  back = () => this._router.navigate(['']);
  
  add = (D) => {
    this.Add.push({image:this.photoUrl , firstName:D.value.first , lastName:D.value.last , phone:D.value.num , email:D.value.email});
    localStorage.setItem("NewContacts", JSON.stringify(this.Add));
    this._router.navigate(['']);
  }
  ngOnInit() {
  }

}
