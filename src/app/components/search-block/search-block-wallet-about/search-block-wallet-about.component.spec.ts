import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBlockWalletAboutComponent } from './search-block-wallet-about.component';

describe('SearchBlockWalletAboutComponent', () => {
    let component: SearchBlockWalletAboutComponent;
    let fixture: ComponentFixture<SearchBlockWalletAboutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SearchBlockWalletAboutComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBlockWalletAboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
