import { TestBed } from '@angular/core/testing';

import { HouseserviceService } from './houseservice.service';

describe('HouseserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HouseserviceService = TestBed.get(HouseserviceService);
    expect(service).toBeTruthy();
  });
});
