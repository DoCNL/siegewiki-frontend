import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPopoutComponent } from './map-popout.component';

describe('MapPopoutComponent', () => {
  let component: MapPopoutComponent;
  let fixture: ComponentFixture<MapPopoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPopoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPopoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
