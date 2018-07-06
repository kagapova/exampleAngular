import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBlockCompanyComponent } from './search-block-company.component';

describe('SearchBlockCompanyComponent', () => {
  let component: SearchBlockCompanyComponent;
  let fixture: ComponentFixture<SearchBlockCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBlockCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBlockCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
