import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBlockWebLinkListMoreButtonComponent } from './search-block-web-link-list-more-button.component';

describe('SearchBlockWebLinkListMoreButtonComponent', () => {
  let component: SearchBlockWebLinkListMoreButtonComponent;
  let fixture: ComponentFixture<SearchBlockWebLinkListMoreButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBlockWebLinkListMoreButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBlockWebLinkListMoreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
