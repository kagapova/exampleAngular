import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionEthComponent } from './transaction-eth.component';

describe('TransactionEthComponent', () => {
  let component: TransactionEthComponent;
  let fixture: ComponentFixture<TransactionEthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionEthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionEthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
