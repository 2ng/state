import { TestBed } from '@angular/core/testing';

import { NgStoreService } from './ng-store.service';

describe('NgstoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgStoreService<any> = TestBed.get(NgStoreService);
    expect(service).toBeTruthy();
  });
});
