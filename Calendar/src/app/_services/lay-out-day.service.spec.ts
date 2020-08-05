import { TestBed } from '@angular/core/testing';

import { LayOutDayService } from './lay-out-day.service';

describe('LayOutDayService', () => {
  let service: LayOutDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayOutDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
