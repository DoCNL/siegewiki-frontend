import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorEditComponent } from './operator-edit.component';

describe('OperatorEditComponent', () => {
  let component: OperatorEditComponent;
  let fixture: ComponentFixture<OperatorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
