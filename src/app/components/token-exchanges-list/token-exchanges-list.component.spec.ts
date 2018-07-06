import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenExchangesListComponent } from './token-exchanges-list.component';

describe('TokenExchangesListComponent', () => {
    let component: TokenExchangesListComponent;
    let fixture: ComponentFixture<TokenExchangesListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TokenExchangesListComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TokenExchangesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
