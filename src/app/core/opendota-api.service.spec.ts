import { TestBed } from '@angular/core/testing';

import { OpendotaApiService } from './opendota-api.service';

describe('OpendotaApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpendotaApiService = TestBed.get(OpendotaApiService);
    expect(service).toBeTruthy();
  });
});
