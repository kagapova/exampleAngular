import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchCapComponent} from './search-cap.component';

describe('SearchCapComponent', () => {
    let component: SearchCapComponent;
    let fixture: ComponentFixture<SearchCapComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchCapComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchCapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
