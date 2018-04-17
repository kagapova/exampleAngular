import { TestBed, inject } from '@angular/core/testing';

import { TopICOsService } from './top-icos.service';

describe('TopICOsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TopICOsService]
        });
    });

    it('should be created', inject([TopICOsService], (service: TopICOsService) => {
        expect(service).toBeTruthy();
    }));
});
