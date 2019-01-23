import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonDeleteComponent } from './season-delete.component';

describe('SeasonDeleteComponent', () => {
  let component: SeasonDeleteComponent;
  let fixture: ComponentFixture<SeasonDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
