import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultTransactionLtcComponent } from './search-result-transaction-ltc.component';

describe('SearchResultTransactionLtcComponent', () => {
  let component: SearchResultTransactionLtcComponent;
  let fixture: ComponentFixture<SearchResultTransactionLtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultTransactionLtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultTransactionLtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
