import { TestBed, inject } from '@angular/core/testing';

import { NoveltiesService } from './novelties.service';

describe('NoveltiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoveltiesService]
    });
  });

  it('should ...', inject([NoveltiesService], (service: NoveltiesService) => {
    expect(service).toBeTruthy();
  }));
});
