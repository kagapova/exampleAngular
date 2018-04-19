import {inject, TestBed} from '@angular/core/testing';

import {LatestNewsService} from './latest-news.service';

describe('LatestNewsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LatestNewsService]
        });
    });

    it('should be created', inject([LatestNewsService], (service: LatestNewsService) => {
        expect(service).toBeTruthy();
    }));
});
