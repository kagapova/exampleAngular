import { TestBed, inject } from '@angular/core/testing';

import { TokenBookmarksService } from './token-bookmarks.service';

describe('TokenBookmarksService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TokenBookmarksService]
        });
    });

    it('should be created', inject([TokenBookmarksService], (service: TokenBookmarksService) => {
        expect(service).toBeTruthy();
    }));
});
