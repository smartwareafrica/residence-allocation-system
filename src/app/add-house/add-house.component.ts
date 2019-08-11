/**
 * @author David Wachira
 * This ts script handles pushing of houses to firebase's firestore database
 * It has functions that: -
 *       - reset form values.
 *       - push data to firestore collection.
 */

import { Component, OnInit} from '@angular/core';
import { AddHouseService } from './shared/add-house.service';
import { error } from '@angular/compiler/src/util';
import { AddHouse} from './shared/add-house.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';




@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {

constructor(public service: AddHouseService,
            public firestore: AngularFirestore) { }

    public imagePath;
    imgURL: any;
    public message: string;

     ngOnInit() {
    this.resetForm();
  }

/* this function resets form values*/

  // Previews to selected image
preview(files) {
  if (files.length === 0) {
    return;
  }
  const mimeType = files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = 'Please select an image.';
    return;
  }
  const reader = new FileReader();
  this.imagePath = files;
  reader.readAsDataURL(files[0]);
  // tslint:disable-next-line: variable-name
  reader.onload = (_event) => {
    this.imgURL = reader.result;
  };
}

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      id: null,
      name: '',
      location: '',
      image: '',
      price: '',
      description : '',
    contact : '',
    households : '',

    };
  }

/* this function adds data to the userData firebase collection*/
 onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) {
      this.firestore.collection('userData').add(data);
    } else {
      this.firestore.doc('userData/' + form.value.id).update(data);
    }
    this.resetForm(form);
  }
// empty textvews when houses have been added

}
