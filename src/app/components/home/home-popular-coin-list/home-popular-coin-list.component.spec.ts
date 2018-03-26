import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomePopularCoinListComponent} from './home-popular-coin-list.component';

describe('HomePopularCoinListComponent', () => {
    let component: HomePopularCoinListComponent;
    let fixture: ComponentFixture<HomePopularCoinListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomePopularCoinListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomePopularCoinListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
