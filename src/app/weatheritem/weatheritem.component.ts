import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Weather } from '../services/weather';

@Component({
  selector: 'app-weatheritem',
  templateUrl: './weatheritem.component.html',
  styleUrls: ['./weatheritem.component.css']
})
export class WeatheritemComponent implements OnInit {

  
  @Input('WeatherItem') weather: Weather | any;
  //declare event for subscription
  @Output() weatherItemChanges = new EventEmitter();

  constructor() { }
  ngOnInit(): any {
  }

  selectedWeatherItem(event: Event) {
    var item = (<HTMLDivElement>event.target);
    console.log('Selected div element', item);
    //Raise event
    this.weatherItemChanges.emit(item.innerHTML);
  }
}


