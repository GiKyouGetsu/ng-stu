import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChileThreeComponent } from './chile-three.component';

describe('ChileThreeComponent', () => {
  let component: ChileThreeComponent;
  let fixture: ComponentFixture<ChileThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChileThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChileThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
