import { TestBed, inject } from '@angular/core/testing';

import { FondsService } from './fonds.service';

describe('FondsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FondsService]
    });
  });

  it('should ...', inject([FondsService], (service: FondsService) => {
    expect(service).toBeTruthy();
  }));
});
