import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonEditRichardComponent } from './season-edit-richard.component';

describe('SeasonEditRichardComponent', () => {
  let component: SeasonEditRichardComponent;
  let fixture: ComponentFixture<SeasonEditRichardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonEditRichardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonEditRichardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
