import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultTransactionBtcComponent } from './search-result-transaction-btc.component';

describe('SearchResultTransactionBtcComponent', () => {
  let component: SearchResultTransactionBtcComponent;
  let fixture: ComponentFixture<SearchResultTransactionBtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultTransactionBtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultTransactionBtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
