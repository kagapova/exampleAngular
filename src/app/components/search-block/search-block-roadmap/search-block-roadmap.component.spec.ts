import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchBlockRoadmapComponent} from './search-block-roadmap.component';

describe('SearchBlockRoadmapComponent', () => {
    let component: SearchBlockRoadmapComponent;
    let fixture: ComponentFixture<SearchBlockRoadmapComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchBlockRoadmapComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBlockRoadmapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
