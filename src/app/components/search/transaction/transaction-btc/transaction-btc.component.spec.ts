import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionBtcComponent } from './transaction-btc.component';

describe('TransactionBtcComponent', () => {
  let component: TransactionBtcComponent;
  let fixture: ComponentFixture<TransactionBtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionBtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionBtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
