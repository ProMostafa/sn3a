import { TestBed } from '@angular/core/testing';

import { SubproductService } from './subproduct.service';

describe('SubproductService', () => {
  let service: SubproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
