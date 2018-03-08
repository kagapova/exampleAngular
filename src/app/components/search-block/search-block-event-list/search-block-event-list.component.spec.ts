import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBlockEventListComponent } from './search-block-event-list.component';

describe('SearchBlockEventListComponent', () => {
  let component: SearchBlockEventListComponent;
  let fixture: ComponentFixture<SearchBlockEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBlockEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBlockEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
