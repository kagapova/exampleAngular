import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangerOtherListComponent } from './exchanger-other-list.component';

describe('ExchangerOtherListComponent', () => {
  let component: ExchangerOtherListComponent;
  let fixture: ComponentFixture<ExchangerOtherListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangerOtherListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangerOtherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
