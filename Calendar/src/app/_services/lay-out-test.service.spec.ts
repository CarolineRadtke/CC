import { TestBed } from '@angular/core/testing';

import { LayOutTestService } from './lay-out-test.service';

describe('LayOutTestService', () => {
  let service: LayOutTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayOutTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
