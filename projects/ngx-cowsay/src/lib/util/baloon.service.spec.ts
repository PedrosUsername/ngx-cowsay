import { TestBed } from '@angular/core/testing';

import { BaloonService } from './baloon.service';

describe('BaloonService', () => {
  let service: BaloonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaloonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
