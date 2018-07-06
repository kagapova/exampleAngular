import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBtcComponent } from './address-btc.component';

describe('AddressBtcComponent', () => {
  let component: AddressBtcComponent;
  let fixture: ComponentFixture<AddressBtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressBtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
