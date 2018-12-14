import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonPopulateComponent } from './season-populate.component';

describe('SeasonPopulateComponent', () => {
  let component: SeasonPopulateComponent;
  let fixture: ComponentFixture<SeasonPopulateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonPopulateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonPopulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
