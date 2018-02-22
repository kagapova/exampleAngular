import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToBookmarksComponent } from './add-to-bookmarks.component';

describe('AddToBookmarksComponent', () => {
  let component: AddToBookmarksComponent;
  let fixture: ComponentFixture<AddToBookmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToBookmarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToBookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
