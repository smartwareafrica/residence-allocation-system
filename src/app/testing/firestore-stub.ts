/*
* In-memory stand-in for AngularFirestore used by unit tests,
* so specs never talk to the real firebase project.
*/
import { Provider } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';

export function createFirestoreStub() {
  const collectionRef = {
    snapshotChanges: jasmine.createSpy('snapshotChanges').and.returnValue(of([])),
    add: jasmine.createSpy('add').and.resolveTo({ id: 'new-id' })
  };
  const docRef = {
    update: jasmine.createSpy('update').and.resolveTo(),
    delete: jasmine.createSpy('delete').and.resolveTo()
  };
  return {
    collectionRef,
    docRef,
    collection: jasmine.createSpy('collection').and.returnValue(collectionRef),
    doc: jasmine.createSpy('doc').and.returnValue(docRef)
  };
}

export type FirestoreStub = ReturnType<typeof createFirestoreStub>;

export function provideFirestoreStub(stub: FirestoreStub = createFirestoreStub()): Provider {
  return { provide: AngularFirestore, useValue: stub };
}
