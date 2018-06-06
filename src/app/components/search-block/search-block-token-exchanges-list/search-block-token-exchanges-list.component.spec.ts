import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBlockTokenExchangesListComponent } from './search-block-token-exchanges-list.component';

describe('SearchBlockTokenExchangesListComponent', () => {
    let component: SearchBlockTokenExchangesListComponent;
    let fixture: ComponentFixture<SearchBlockTokenExchangesListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SearchBlockTokenExchangesListComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBlockTokenExchangesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
