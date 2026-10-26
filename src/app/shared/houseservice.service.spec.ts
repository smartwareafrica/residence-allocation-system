import { TestBed } from '@angular/core/testing';

import { HouseserviceService } from './houseservice.service';
import { createFirestoreStub, FirestoreStub, provideFirestoreStub } from '../testing/firestore-stub';

describe('HouseserviceService', () => {
  let firestore: FirestoreStub;

  beforeEach(() => {
    firestore = createFirestoreStub();
    TestBed.configureTestingModule({
      providers: [provideFirestoreStub(firestore)]
    });
  });

  it('should be created', () => {
    const service: HouseserviceService = TestBed.inject(HouseserviceService);
    expect(service).toBeTruthy();
  });

  it('should send data to the userData collection', async () => {
    const service: HouseserviceService = TestBed.inject(HouseserviceService);
    const house = { name: 'Test house' };
    await service.sendData(house);
    expect(firestore.collection).toHaveBeenCalledWith('userData');
    expect(firestore.collectionRef.add).toHaveBeenCalledWith(house);
  });

  it('should display houses from the userData collection', () => {
    const service: HouseserviceService = TestBed.inject(HouseserviceService);
    service.displayHouses();
    expect(firestore.collection).toHaveBeenCalledWith('userData');
    expect(firestore.collectionRef.snapshotChanges).toHaveBeenCalled();
  });
});
