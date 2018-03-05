import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchBlockWebLinkListComponent} from './search-block-web-link-list.component';

describe('SearchBlockWebLinkListComponent', () => {
    let component: SearchBlockWebLinkListComponent;
    let fixture: ComponentFixture<SearchBlockWebLinkListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchBlockWebLinkListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBlockWebLinkListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
