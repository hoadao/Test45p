import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRightBodyComponent } from './demo-right-body.component';

describe('DemoRightBodyComponent', () => {
  let component: DemoRightBodyComponent;
  let fixture: ComponentFixture<DemoRightBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRightBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRightBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
