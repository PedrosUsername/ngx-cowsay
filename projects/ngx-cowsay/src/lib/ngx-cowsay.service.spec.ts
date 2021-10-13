import { TestBed } from '@angular/core/testing';

import { NgxCowsayService } from './ngx-cowsay.service';

describe('NgxCowsayService', () => {
  let service: NgxCowsayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCowsayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
