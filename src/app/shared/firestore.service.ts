/*
* Thin wrapper around the official firebase SDK.
* All firestore access goes through this class so the rest of the app
* does not depend on any third party angular/firebase bindings.
*/
import { Injectable, NgZone } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, deleteDoc, doc, Firestore, getFirestore, onSnapshot, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private db: Firestore = getFirestore(initializeApp(environment.firebase));

  constructor(private zone: NgZone) { }

  // emits the whole collection now and again whenever it changes
  watch<T>(path: string): Observable<(T & { id: string })[]> {
    return new Observable(subscriber => onSnapshot(
      collection(this.db, path),
      snapshot => this.zone.run(() => subscriber.next(
        snapshot.docs.map(item => ({ id: item.id, ...item.data() }) as T & { id: string })
      )),
      error => this.zone.run(() => subscriber.error(error))
    ));
  }

  add(path: string, data: object) {
    return addDoc(collection(this.db, path), data);
  }

  update(path: string, data: object) {
    return updateDoc(doc(this.db, path), { ...data });
  }

  delete(path: string) {
    return deleteDoc(doc(this.db, path));
  }
}
