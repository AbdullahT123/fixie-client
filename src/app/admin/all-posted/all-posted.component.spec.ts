import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPostedComponent } from './all-posted.component';

describe('AllPostedComponent', () => {
  let component: AllPostedComponent;
  let fixture: ComponentFixture<AllPostedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPostedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
