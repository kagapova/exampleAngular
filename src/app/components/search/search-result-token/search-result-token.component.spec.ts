import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultTokenComponent } from './search-result-token.component';

describe('SearchResultTokenComponent', () => {
  let component: SearchResultTokenComponent;
  let fixture: ComponentFixture<SearchResultTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
