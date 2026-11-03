/*
* In-memory stand-in for FirestoreService used by unit tests,
* so specs never talk to the real firebase project.
*/
import { Provider } from '@angular/core';
import { of } from 'rxjs';
import { FirestoreService } from '../shared/firestore.service';

export function createFirestoreStub() {
  return {
    watch: vi.fn().mockReturnValue(of([])),
    add: vi.fn().mockResolvedValue({ id: 'new-id' }),
    update: vi.fn().mockResolvedValue(undefined),
    delete: vi.fn().mockResolvedValue(undefined)
  };
}

export type FirestoreStub = ReturnType<typeof createFirestoreStub>;

export function provideFirestoreStub(stub: FirestoreStub = createFirestoreStub()): Provider {
  return { provide: FirestoreService, useValue: stub };
}
