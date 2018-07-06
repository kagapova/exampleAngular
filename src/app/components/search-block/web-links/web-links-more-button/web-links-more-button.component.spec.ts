import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {WebLinksMoreButtonComponent} from './web-links-more-button.component';

describe('WebLinksMoreButtonComponent', () => {
  let component: WebLinksMoreButtonComponent;
  let fixture: ComponentFixture<WebLinksMoreButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebLinksMoreButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebLinksMoreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
