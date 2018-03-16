import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAddContentButtonComponent } from './search-add-content-button.component';

describe('SearchAddContentButtonComponent', () => {
  let component: SearchAddContentButtonComponent;
  let fixture: ComponentFixture<SearchAddContentButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAddContentButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAddContentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
