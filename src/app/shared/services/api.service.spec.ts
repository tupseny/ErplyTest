import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  it('should be get json', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service.getVatDate instanceof Object).toBe(true);
  });
});
