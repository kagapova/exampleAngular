import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchBlockTeamComponent} from './search-block-team.component';

describe('SearchBlockTeamComponent', () => {
    let component: SearchBlockTeamComponent;
    let fixture: ComponentFixture<SearchBlockTeamComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchBlockTeamComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBlockTeamComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
