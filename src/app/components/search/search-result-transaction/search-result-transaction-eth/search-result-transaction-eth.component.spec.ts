import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultTransactionEthComponent } from './search-result-transaction-eth.component';

describe('SearchResultTransactionEthComponent', () => {
  let component: SearchResultTransactionEthComponent;
  let fixture: ComponentFixture<SearchResultTransactionEthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultTransactionEthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultTransactionEthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
