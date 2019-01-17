import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInfComponent } from './order-inf.component';

describe('OrderInfComponent', () => {
  let component: OrderInfComponent;
  let fixture: ComponentFixture<OrderInfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderInfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
