/*
*@author David Wachira
*This service handles firebase database and storage
*It has the functions for getting data from the database
*/

import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AngularFirestore} from 'angularfire2/firestore';
import { FormsModule } from "@angular/forms";
import { error } from 'util';
import {BehaviorSubject} from  'rxjs';
import 'firebase/storage';
import {AddHouse} from './add-house.model';
@Injectable({
  providedIn: 'root'
})

export class AddHouseService {
  //store list of houses
  formData: AddHouse;
  
//interact with firebase
  constructor(private firestore :AngularFirestore) { }

   ngOnInit(): void {
    this.retrieve();
    
  }

/*this function retrieves data from firebase firestore database*/
  retrieve(){
return this.firestore.collection('userData').snapshotChanges();
  }

}
