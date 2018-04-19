import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBlockNewsListComponent } from './search-block-news-list.component';

describe('SearchBlockNewsListComponent', () => {
    let component: SearchBlockNewsListComponent;
    let fixture: ComponentFixture<SearchBlockNewsListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ SearchBlockNewsListComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBlockNewsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
