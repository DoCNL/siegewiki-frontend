import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorPopoutComponent } from './operator-popout.component';

describe('OperatorPopoutComponent', () => {
  let component: OperatorPopoutComponent;
  let fixture: ComponentFixture<OperatorPopoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorPopoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorPopoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
