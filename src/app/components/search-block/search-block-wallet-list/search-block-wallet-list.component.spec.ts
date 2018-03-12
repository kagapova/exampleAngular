import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBlockWalletListComponent } from './search-block-wallet-list.component';

describe('SearchBlockWalletListComponent', () => {
  let component: SearchBlockWalletListComponent;
  let fixture: ComponentFixture<SearchBlockWalletListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBlockWalletListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBlockWalletListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
