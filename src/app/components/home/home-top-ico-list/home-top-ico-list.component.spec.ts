import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopIcoListComponent } from './home-top-ico-list.component';

describe('HomeTopIcoListComponent', () => {
    let component: HomeTopIcoListComponent;
    let fixture: ComponentFixture<HomeTopIcoListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HomeTopIcoListComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeTopIcoListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
