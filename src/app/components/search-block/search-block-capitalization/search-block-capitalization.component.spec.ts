import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchBlockCapitalizationComponent} from './search-block-capitalization.component';

describe('SearchBlockCapitalizationComponent', () => {
    let component: SearchBlockCapitalizationComponent;
    let fixture: ComponentFixture<SearchBlockCapitalizationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchBlockCapitalizationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBlockCapitalizationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
