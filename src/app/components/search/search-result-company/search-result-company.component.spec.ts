import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultCompanyComponent } from './search-result-company.component';

describe('SearchResultCompanyComponent', () => {
  let component: SearchResultCompanyComponent;
  let fixture: ComponentFixture<SearchResultCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
