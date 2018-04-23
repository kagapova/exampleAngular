import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBlockExchangeCurrentRateListComponent } from './search-block-exchange-current-rate-list.component';

describe('SearchBlockExchangeCurrentRateListComponent', () => {
  let component: SearchBlockExchangeCurrentRateListComponent;
  let fixture: ComponentFixture<SearchBlockExchangeCurrentRateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBlockExchangeCurrentRateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBlockExchangeCurrentRateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
