import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBlockNewsComponent } from './search-block-news.component';

describe('SearchBlockNewsComponent', () => {
    let component: SearchBlockNewsComponent;
    let fixture: ComponentFixture<SearchBlockNewsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SearchBlockNewsComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBlockNewsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
