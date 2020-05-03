import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarWashComponent } from './car-wash.component';

describe('CarWashComponent', () => {
  let component: CarWashComponent;
  let fixture: ComponentFixture<CarWashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarWashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarWashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
