import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeCurrentRateListComponent } from './exchange-current-rate-list.component';

describe('ExchangeCurrentRateListComponent', () => {
  let component: ExchangeCurrentRateListComponent;
  let fixture: ComponentFixture<ExchangeCurrentRateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeCurrentRateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCurrentRateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
