import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHouseComponent } from './view-house.component';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { createFirestoreStub, FirestoreStub, provideFirestoreStub } from '../testing/firestore-stub';

describe('ViewHouseComponent', () => {
  let component: ViewHouseComponent;
  let fixture: ComponentFixture<ViewHouseComponent>;
  let firestore: FirestoreStub;

  beforeEach(async () => {
    firestore = createFirestoreStub();
    firestore.watch.mockReturnValue(of([{ id: 'house-1', name: 'Test house' }]));
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ViewHouseComponent ],
      providers: [ provideFirestoreStub(firestore) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list houses from the database with their ids', () => {
    expect(firestore.watch).toHaveBeenCalledWith('userData');
    expect(component.list).toEqual([{ id: 'house-1', name: 'Test house' }] as any);
    expect(fixture.nativeElement.querySelectorAll('form').length).toBe(1);
  });
});
