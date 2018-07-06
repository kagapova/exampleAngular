import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WebLinksComponent} from './web-links.component';

describe('WebLinksComponent', () => {
    let component: WebLinksComponent;
    let fixture: ComponentFixture<WebLinksComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WebLinksComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WebLinksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
