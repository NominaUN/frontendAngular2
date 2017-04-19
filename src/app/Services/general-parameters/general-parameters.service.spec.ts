import { TestBed, inject } from '@angular/core/testing';

import { GeneralParametersService } from './general-parameters.service';

describe('GeneralParametersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralParametersService]
    });
  });

  it('should ...', inject([GeneralParametersService], (service: GeneralParametersService) => {
    expect(service).toBeTruthy();
  }));
});
