import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackLinkComponent } from './track-link.component';

describe('TrackLinkComponent', () => {
  let component: TrackLinkComponent;
  let fixture: ComponentFixture<TrackLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
