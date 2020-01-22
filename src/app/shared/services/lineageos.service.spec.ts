import { TestBed } from '@angular/core/testing';

import { LineageosService } from './lineageos.service';

describe('LineageosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LineageosService = TestBed.get(LineageosService);
    expect(service).toBeTruthy();
  });
});
