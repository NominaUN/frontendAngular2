import { TestBed, inject } from '@angular/core/testing';

import { ConceptsService } from './concepts.service';

describe('ConceptsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConceptsService]
    });
  });

  it('should ...', inject([ConceptsService], (service: ConceptsService) => {
    expect(service).toBeTruthy();
  }));
});
