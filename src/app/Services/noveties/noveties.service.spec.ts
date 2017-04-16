import { TestBed, inject } from '@angular/core/testing';

import { NovetiesService } from './noveties.service';

describe('NovetiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NovetiesService]
    });
  });

  it('should ...', inject([NovetiesService], (service: NovetiesService) => {
    expect(service).toBeTruthy();
  }));
});
