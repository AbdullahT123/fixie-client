import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteddriComponent } from './completeddri.component';

describe('CompleteddriComponent', () => {
  let component: CompleteddriComponent;
  let fixture: ComponentFixture<CompleteddriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteddriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteddriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
