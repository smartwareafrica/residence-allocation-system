import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHouseComponent } from './view-house.component';
import { provideFirestoreStub } from '../testing/firestore-stub';

describe('ViewHouseComponent', () => {
  let component: ViewHouseComponent;
  let fixture: ComponentFixture<ViewHouseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHouseComponent ],
      providers: [ provideFirestoreStub() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
