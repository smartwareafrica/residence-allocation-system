import { TestBed } from '@angular/core/testing';

import { AddHouseService } from './add-house.service';
import { createFirestoreStub, FirestoreStub, provideFirestoreStub } from '../../testing/firestore-stub';

describe('AddHouseService', () => {
  let firestore: FirestoreStub;

  beforeEach(() => {
    firestore = createFirestoreStub();
    TestBed.configureTestingModule({
      providers: [provideFirestoreStub(firestore)]
    });
  });

  it('should be created', () => {
    const service: AddHouseService = TestBed.inject(AddHouseService);
    expect(service).toBeTruthy();
  });

  it('should retrieve houses from the userData collection', () => {
    const service: AddHouseService = TestBed.inject(AddHouseService);
    service.retrieve();
    expect(firestore.collection).toHaveBeenCalledWith('userData');
    expect(firestore.collectionRef.snapshotChanges).toHaveBeenCalled();
  });
});
