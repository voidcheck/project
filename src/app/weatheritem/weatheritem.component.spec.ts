import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatheritemComponent } from './weatheritem.component';

describe('WeatheritemComponent', () => {
  let component: WeatheritemComponent;
  let fixture: ComponentFixture<WeatheritemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatheritemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatheritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
