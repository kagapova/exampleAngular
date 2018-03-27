import {TestBed, inject} from '@angular/core/testing';

import {TrendingSearchesService} from './trending-searches.service';

describe('TrendingSearchesService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TrendingSearchesService]
        });
    });

    it('should be created', inject([TrendingSearchesService], (service: TrendingSearchesService) => {
        expect(service).toBeTruthy();
    }));
});
