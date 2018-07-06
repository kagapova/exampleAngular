import { TestBed, inject } from '@angular/core/testing';

import { CompanyBookmarksService } from './company-bookmarks.service';

describe('CompanyBookmarksService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CompanyBookmarksService]
        });
    });

    it('should be created', inject([CompanyBookmarksService], (service: CompanyBookmarksService) => {
        expect(service).toBeTruthy();
    }));
});
