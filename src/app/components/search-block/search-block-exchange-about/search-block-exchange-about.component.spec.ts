import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBlockExchangeAboutComponent } from './search-block-exchange-about.component';

describe('SearchBlockExchangeAboutComponent', () => {
  let component: SearchBlockExchangeAboutComponent;
  let fixture: ComponentFixture<SearchBlockExchangeAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBlockExchangeAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBlockExchangeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
