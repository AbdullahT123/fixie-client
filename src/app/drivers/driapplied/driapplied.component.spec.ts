import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriappliedComponent } from './driapplied.component';

describe('DriappliedComponent', () => {
  let component: DriappliedComponent;
  let fixture: ComponentFixture<DriappliedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriappliedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriappliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
