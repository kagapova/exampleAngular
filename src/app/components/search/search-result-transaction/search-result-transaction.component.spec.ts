import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultTransactionComponent } from './search-result-transaction.component';

describe('SearchResultTransactionComponent', () => {
  let component: SearchResultTransactionComponent;
  let fixture: ComponentFixture<SearchResultTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
