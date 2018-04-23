import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBlockExchangerOtherComponent } from './search-block-exchanger-other.component';

describe('SearchBlockExchangerOtherComponent', () => {
  let component: SearchBlockExchangerOtherComponent;
  let fixture: ComponentFixture<SearchBlockExchangerOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBlockExchangerOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBlockExchangerOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
