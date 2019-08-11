import { TestBed } from '@angular/core/testing';

import { AddHouseService } from './add-house.service';

describe('AddHouseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddHouseService = TestBed.get(AddHouseService);
    expect(service).toBeTruthy();
  });
});
