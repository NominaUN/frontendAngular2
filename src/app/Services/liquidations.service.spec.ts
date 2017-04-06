import { TestBed, inject } from '@angular/core/testing';

import { LiquidationsService } from './liquidations.service';

describe('LiquidationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiquidationsService]
    });
  });

  it('should ...', inject([LiquidationsService], (service: LiquidationsService) => {
    expect(service).toBeTruthy();
  }));
});
