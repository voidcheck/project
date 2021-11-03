import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weatherlist',
  templateUrl: './weatherlist.component.html',
  styleUrls: ['./weatherlist.component.css'],
  providers: [WeatherService]
})
export class WeatherlistComponent implements OnInit {
  @Input('WeatherForecastList') weathers: any;
  errorMessage: string = '';
  selectedItem: String = 'nothing';
  constructor() { }

  ngOnInit(): void {
  }

  updateSelectedWeatherItem(event: any) {
    console.log('Recieved selected weather item in list component', event);
    this.selectedItem = event;
  }
}
