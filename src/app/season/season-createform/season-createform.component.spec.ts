import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonCreateformComponent } from './season-createform.component';

describe('SeasonCreateformComponent', () => {
  let component: SeasonCreateformComponent;
  let fixture: ComponentFixture<SeasonCreateformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonCreateformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonCreateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
