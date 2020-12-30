import { TestBed } from '@angular/core/testing';

import { TechnisionService } from './technision.service';

describe('TechnisionService', () => {
  let service: TechnisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
