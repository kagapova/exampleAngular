import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultLinkComponent } from './search-result-link.component';

describe('SearchResultLinkComponent', () => {
  let component: SearchResultLinkComponent;
  let fixture: ComponentFixture<SearchResultLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
