import { TestBed, inject } from '@angular/core/testing';

import { ParsingDataService } from './parsing-data.service';

describe('ParsingDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParsingDataService]
    });
  });

  it('should be created', inject([ParsingDataService], (service: ParsingDataService) => {
    expect(service).toBeTruthy();
  }));
});
