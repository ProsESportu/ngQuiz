import { TestBed } from '@angular/core/testing';

import { QADataService } from './q-a-data.service';

describe('QADataService', () => {
  let service: QADataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QADataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
