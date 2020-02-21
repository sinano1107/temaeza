import { TestBed } from '@angular/core/testing';

import { ManageReserveService } from './manage-reserve.service';

describe('ManageReserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageReserveService = TestBed.get(ManageReserveService);
    expect(service).toBeTruthy();
  });
});
