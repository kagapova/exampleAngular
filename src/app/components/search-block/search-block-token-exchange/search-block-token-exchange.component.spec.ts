import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBlockTokenExchangeComponent } from './search-block-token-exchange.component';

describe('SearchBlockTokenExchangeComponent', () => {
    let component: SearchBlockTokenExchangeComponent;
    let fixture: ComponentFixture<SearchBlockTokenExchangeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SearchBlockTokenExchangeComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBlockTokenExchangeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
