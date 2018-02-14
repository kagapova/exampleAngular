import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultAddressComponent } from './search-result-address.component';

describe('SearchResultAddressComponent', () => {
  let component: SearchResultAddressComponent;
  let fixture: ComponentFixture<SearchResultAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
