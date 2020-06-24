import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriregisterComponent } from './driregister.component';

describe('DriregisterComponent', () => {
  let component: DriregisterComponent;
  let fixture: ComponentFixture<DriregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
