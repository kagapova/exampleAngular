import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {WalletAboutComponent} from './index';

describe('WalletAboutComponent', () => {
    let component: WalletAboutComponent;
    let fixture: ComponentFixture<WalletAboutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ WalletAboutComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WalletAboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
