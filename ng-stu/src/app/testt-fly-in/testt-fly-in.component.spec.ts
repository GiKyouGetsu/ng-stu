import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesttFlyInComponent } from './testt-fly-in.component';

describe('TesttFlyInComponent', () => {
  let component: TesttFlyInComponent;
  let fixture: ComponentFixture<TesttFlyInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesttFlyInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesttFlyInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
