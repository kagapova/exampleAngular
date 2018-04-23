import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultExchangeComponent } from './search-result-exchange.component';

describe('SearchResultExchangeComponent', () => {
  let component: SearchResultExchangeComponent;
  let fixture: ComponentFixture<SearchResultExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
