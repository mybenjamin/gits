import { TestBed } from '@angular/core/testing';

import { ThrowShadeService } from './throw-shade.service';

describe('ThrowShadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThrowShadeService = TestBed.get(ThrowShadeService);
    expect(service).toBeTruthy();
  });
});
