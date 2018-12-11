import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorCreateComponent } from './operator-create.component';

describe('OperatorCreateComponent', () => {
  let component: OperatorCreateComponent;
  let fixture: ComponentFixture<OperatorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
