import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPipeComponent } from './ng-pipe.component';

describe('NgPipeComponent', () => {
  let component: NgPipeComponent;
  let fixture: ComponentFixture<NgPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
