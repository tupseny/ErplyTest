import { TestBed } from '@angular/core/testing';

import { VatDataService } from './vat-data.service';

describe('VatDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VatDataService = TestBed.get(VatDataService);
    expect(service).toBeTruthy();
  });
});
