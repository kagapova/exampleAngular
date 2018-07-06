import { TestBed, inject } from '@angular/core/testing';

import { PopularSearchesService } from './popular-searches.service';

describe('PopularSearchesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopularSearchesService]
    });
  });

  it('should be created', inject([PopularSearchesService], (service: PopularSearchesService) => {
    expect(service).toBeTruthy();
  }));
});
