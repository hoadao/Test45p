import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLeftBodyComponent } from './demo-left-body.component';

describe('DemoLeftBodyComponent', () => {
  let component: DemoLeftBodyComponent;
  let fixture: ComponentFixture<DemoLeftBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoLeftBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoLeftBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
