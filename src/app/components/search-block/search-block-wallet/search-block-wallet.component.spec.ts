import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBlockWalletComponent } from './search-block-wallet.component';

describe('SearchBlockWalletComponent', () => {
  let component: SearchBlockWalletComponent;
  let fixture: ComponentFixture<SearchBlockWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBlockWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBlockWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
