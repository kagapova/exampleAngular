import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangerOtherComponent } from './exchanger-other.component';

describe('ExchangerOtherComponent', () => {
  let component: ExchangerOtherComponent;
  let fixture: ComponentFixture<ExchangerOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangerOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangerOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
