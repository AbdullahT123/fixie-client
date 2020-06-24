import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriCompletedComponent } from './dri-completed.component';

describe('DriCompletedComponent', () => {
  let component: DriCompletedComponent;
  let fixture: ComponentFixture<DriCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
