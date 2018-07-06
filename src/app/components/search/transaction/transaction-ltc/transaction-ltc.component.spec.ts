import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionLtcComponent } from './transaction-ltc.component';

describe('TransactionLtcComponent', () => {
  let component: TransactionLtcComponent;
  let fixture: ComponentFixture<TransactionLtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionLtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionLtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
