import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairerInfoComponent } from './repairer-info.component';

describe('RepairerInfoComponent', () => {
  let component: RepairerInfoComponent;
  let fixture: ComponentFixture<RepairerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
