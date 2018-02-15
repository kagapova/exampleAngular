import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultAddressBtcComponent } from './search-result-address-btc.component';

describe('SearchResultAddressBtcComponent', () => {
  let component: SearchResultAddressBtcComponent;
  let fixture: ComponentFixture<SearchResultAddressBtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultAddressBtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultAddressBtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
