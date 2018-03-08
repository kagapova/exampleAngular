import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBlockEventComponent } from './search-block-event.component';

describe('SearchBlockEventComponent', () => {
  let component: SearchBlockEventComponent;
  let fixture: ComponentFixture<SearchBlockEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBlockEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBlockEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
