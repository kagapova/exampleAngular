import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTrendingSearcheListComponent } from './home-trending-searche-list.component';

describe('HomeTrendingSearcheListComponent', () => {
  let component: HomeTrendingSearcheListComponent;
  let fixture: ComponentFixture<HomeTrendingSearcheListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTrendingSearcheListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTrendingSearcheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
