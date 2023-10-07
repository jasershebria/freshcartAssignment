import { TestBed } from '@angular/core/testing';

import { ForgtpasswordService } from './forgtpassword.service';

describe('ForgtpasswordService', () => {
  let service: ForgtpasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgtpasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
