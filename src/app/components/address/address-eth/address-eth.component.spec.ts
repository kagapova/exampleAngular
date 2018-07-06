import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressEthComponent } from './address-eth.component';

describe('AddressEthComponent', () => {
  let component: AddressEthComponent;
  let fixture: ComponentFixture<AddressEthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressEthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressEthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
