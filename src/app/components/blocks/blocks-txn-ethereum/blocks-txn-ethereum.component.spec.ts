import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksTxnEthereumComponent } from './blocks-txn-ethereum.component';

describe('BlocksTxnEthereumComponent', () => {
  let component: BlocksTxnEthereumComponent;
  let fixture: ComponentFixture<BlocksTxnEthereumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocksTxnEthereumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksTxnEthereumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
