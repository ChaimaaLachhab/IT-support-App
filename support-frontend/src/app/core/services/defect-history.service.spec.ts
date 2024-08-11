import { TestBed } from '@angular/core/testing';

import { DefectHistoryService } from './defect-history.service';

describe('DefectHistoryService', () => {
  let service: DefectHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefectHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
