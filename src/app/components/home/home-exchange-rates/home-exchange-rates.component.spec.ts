import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExchangeRatesComponent } from './home-exchange-rates.component';

describe('HomeExchangeRatesComponent', () => {
  let component: HomeExchangeRatesComponent;
  let fixture: ComponentFixture<HomeExchangeRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeExchangeRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeExchangeRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
