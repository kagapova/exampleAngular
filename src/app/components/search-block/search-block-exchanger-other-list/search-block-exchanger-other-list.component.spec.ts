import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBlockExchangerOtherListComponent } from './search-block-exchanger-other-list.component';

describe('SearchBlockExchangerOtherListComponent', () => {
  let component: SearchBlockExchangerOtherListComponent;
  let fixture: ComponentFixture<SearchBlockExchangerOtherListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBlockExchangerOtherListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBlockExchangerOtherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
