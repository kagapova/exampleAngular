import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeAboutComponent } from './exchange-about.component';

describe('ExchangeAboutComponent', () => {
  let component: ExchangeAboutComponent;
  let fixture: ComponentFixture<ExchangeAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
