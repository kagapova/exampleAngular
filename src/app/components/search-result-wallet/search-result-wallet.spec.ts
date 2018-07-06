import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SearchResultWalletComponent} from './index';

describe('SearchResultWalletComponent', () => {
    let component: SearchResultWalletComponent;
    let fixture: ComponentFixture<SearchResultWalletComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SearchResultWalletComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchResultWalletComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
