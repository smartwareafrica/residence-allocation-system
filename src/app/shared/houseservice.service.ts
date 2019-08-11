/* 
*author abutto john
*sccj/00261/2015
*this is the firebase service class
*this class is responible for retrieving data from the firebase
*and make it availabele to be used in any component that needs it
* it include methods that are used for CRUD operations
 */
import { Injectable } from '@angular/core';
import { Houseservice } from '../shared/houseservice';
import {AngularFirestore} from '@angular/fire/firestore';
import { FormsModule } from "@angular/forms";
import { error } from 'util';
import {BehaviorSubject} from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseserviceService {
  

  constructor(private firestore: AngularFirestore) {
    
  }
  ngOnInit(): void {
    this.retrieve();
    
  }

retrieve(){
  

}
//add data to the firebase
  sendData(dataobj){

    return this.firestore.collection('userData').add(dataobj)
    .catch(console.error);

  }
  //retrieve data from the db
  displayHouses(){
    return this.firestore.collection('userData').snapshotChanges();
  }


}
