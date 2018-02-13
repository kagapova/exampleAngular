import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksBlockchainComponent } from './blocks-blockchain.component';

describe('BlocksBlockchainComponent', () => {
  let component: BlocksBlockchainComponent;
  let fixture: ComponentFixture<BlocksBlockchainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocksBlockchainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
