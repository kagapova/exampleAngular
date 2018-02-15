import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultAddressEthComponent } from './search-result-address-eth.component';

describe('SearchResultAddressEthComponent', () => {
  let component: SearchResultAddressEthComponent;
  let fixture: ComponentFixture<SearchResultAddressEthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultAddressEthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultAddressEthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
