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
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class HouseserviceService {
  

  constructor(private firestore: FirestoreService) {
    
  }
  ngOnInit(): void {
    this.retrieve();
    
  }

retrieve(){
  

}
//add data to the firebase
  sendData(dataobj){

    return this.firestore.add('userData', dataobj)
    .catch(console.error);

  }
  //retrieve data from the db
  displayHouses(){
    return this.firestore.watch<Houseservice>('userData');
  }


}
