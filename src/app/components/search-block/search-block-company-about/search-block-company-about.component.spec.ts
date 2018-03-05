import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBlockCompanyAboutComponent } from './search-block-company-about.component';

describe('SearchBlockCompanyAboutComponent', () => {
  let component: SearchBlockCompanyAboutComponent;
  let fixture: ComponentFixture<SearchBlockCompanyAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBlockCompanyAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBlockCompanyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
