import { TestBed } from '@angular/core/testing';

import { ManageNowService } from './manage-now.service';

describe('ManageNowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageNowService = TestBed.get(ManageNowService);
    expect(service).toBeTruthy();
  });
});
