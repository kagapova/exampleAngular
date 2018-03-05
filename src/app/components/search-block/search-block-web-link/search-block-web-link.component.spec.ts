import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchBlockWebLinkComponent} from './search-block-web-link.component';

describe('SearchBlockWebLinkComponent', () => {
    let component: SearchBlockWebLinkComponent;
    let fixture: ComponentFixture<SearchBlockWebLinkComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchBlockWebLinkComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBlockWebLinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
