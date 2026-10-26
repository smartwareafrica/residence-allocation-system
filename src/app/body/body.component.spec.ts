import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterModule } from '@angular/router';

import { BodyComponent } from './body.component';
import { provideFirestoreStub } from '../testing/firestore-stub';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ RouterModule.forRoot([]) ],
      declarations: [ BodyComponent ],
      providers: [ provideFirestoreStub() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
