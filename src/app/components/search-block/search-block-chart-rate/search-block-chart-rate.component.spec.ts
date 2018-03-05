import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchBlockChartRateComponent} from './search-block-chart-rate.component';

describe('SearchBlockChartRateComponent', () => {
    let component: SearchBlockChartRateComponent;
    let fixture: ComponentFixture<SearchBlockChartRateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchBlockChartRateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBlockChartRateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
