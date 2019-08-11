/* 
*Author: john abutto
*sccj/00261/2016
*residence allocation project
*
 */

// this class is the 'extension' of HouseserviceService.ts class
// it helps in displaying data from db to the users
// it contains the relevant methods to assist in doing so

import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { from, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Houseservice } from '../shared/houseservice';
import { AngularFireDatabase} from '@angular/fire/database';
import { HouseserviceService } from '../shared/houseservice.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],

})
export class BodyComponent implements OnInit {

  public houses :any;

@Output() eventClicked = new EventEmitter<Houseservice>();

  constructor(private hseService: HouseserviceService ) { 
  }

  ngOnInit() {

    this.showHouses();
  }

  /* get the data from  HouseserviceService.ts and 
  create a method for displaying it to the user 
  */
showHouses(){
  this.hseService.displayHouses()
  .subscribe(data => {
    this.houses = data.map (e => {
      return{
        name: e.payload.doc.data()['name'],
        Location:e.payload.doc.data()['location'],
        Description: e.payload.doc.data()['description'],
      };
    })

  });
}

/* when the view button is clicked
user should be able to navigate to component that displays house details
from there he can also book room */
viewDetails() {
this.eventClicked.emit(this.houses);
console.log(this.eventClicked.emit(this.houses) + 'clicked');
}

}

