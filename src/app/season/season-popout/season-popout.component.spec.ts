import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonPopoutComponent } from './season-popout.component';

describe('SeasonPopoutComponent', () => {
  let component: SeasonPopoutComponent;
  let fixture: ComponentFixture<SeasonPopoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonPopoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonPopoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
