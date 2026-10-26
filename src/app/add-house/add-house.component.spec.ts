import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { AddHouseComponent } from './add-house.component';
import { provideFirestoreStub } from '../testing/firestore-stub';

describe('AddHouseComponent', () => {
  let component: AddHouseComponent;
  let fixture: ComponentFixture<AddHouseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AddHouseComponent ],
      providers: [ provideFirestoreStub() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
