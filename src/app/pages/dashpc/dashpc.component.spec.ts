import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashpcComponent } from './dashpc.component';

describe('DashpcComponent', () => {
  let component: DashpcComponent;
  let fixture: ComponentFixture<DashpcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashpcComponent]
    });
    fixture = TestBed.createComponent(DashpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
