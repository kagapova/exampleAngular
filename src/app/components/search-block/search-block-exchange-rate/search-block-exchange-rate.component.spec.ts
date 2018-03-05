import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchBlockExchangeRateComponent} from './search-block-exchange-rate.component';

describe('SearchBlockExchangeRateComponent', () => {
    let component: SearchBlockExchangeRateComponent;
    let fixture: ComponentFixture<SearchBlockExchangeRateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchBlockExchangeRateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBlockExchangeRateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
