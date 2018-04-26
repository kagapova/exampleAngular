import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormPopularComponent } from './search-form-popular.component';

describe('SearchFormPopularComponent', () => {
  let component: SearchFormPopularComponent;
  let fixture: ComponentFixture<SearchFormPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFormPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
