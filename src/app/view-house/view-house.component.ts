/*
* Author David Wachira
* This typescript files handles displaying of houses to the users 
* It houses functions for: -
*         - Retrieving house data from firestore
*         - Editing data handles
*         - Deleting data from the database 
*/

import { FirestoreService } from '../shared/firestore.service';
import { Component, OnInit } from '@angular/core';
// import { Houseservice } from '../shared/houseservice';
import { AddHouseService } from '../add-house/shared/add-house.service';
import { AddHouse} from '../add-house/shared/add-house.model';

@Component({
  selector: 'app-view-house',
  standalone: false,
  templateUrl: './view-house.component.html',
  styleUrls: ['./view-house.component.css']
})
export class ViewHouseComponent implements OnInit {
  list: AddHouse[];
 constructor(private service: AddHouseService,
    private firestore: FirestoreService) { }


  ngOnInit() {
    this.service.retrieve().subscribe(houses => {
      this.list = houses;
    });
  }
 
  onEdit(house: AddHouse) {
    this.service.formData = Object.assign({}, house);
  }
 
  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.delete('userData/' + id);
    }
  }

}
