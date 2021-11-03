import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { WeatherService } from '../services/weather.service';

interface Website {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  errorMessage: string= '';
  weatherForecastData: any;
  disabledForecastButton: boolean = false;
  cityName: string = '';
  websites: Website[] = [
    {value: '1', viewValue: 'delhi'},
    {value: '2', viewValue: 'noida'},
    {value: '3', viewValue: 'dehradun'}
  ];
  form: FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private weatherService: WeatherService, private fb: FormBuilder) { 
    this.form = fb.group({
      website: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  logout() {
    console.log('logging out... ');
    this.authService.signOut();
  }

  onSubmit(cityName: string) {
    console.log(cityName);
    this.weatherService.getWeatherForecast(cityName)
        .subscribe((data: any) => { this.weatherForecastData =  data.list }, (error: any) => this.errorMessage = <any>error);
  }

  onSearchLocation(cityName: string) {
      this.disabledForecastButton = false;
      console.log(cityName);
  }

  onSubmitDatabinding() {
      console.log('Inside the two way', this.cityName);
      this.weatherService.getWeatherForecast(this.cityName)
          .subscribe((data: any) => { this.weatherForecastData = data.list }, (error: any) => this.errorMessage = <any>error);
      this.onResetControls();
  }

  onSearchLocationWithEvent(event: Event) {
      console.log('Control event value', (<HTMLInputElement>event.target).value);
      this.cityName = (<HTMLInputElement>event.target).value;
      this.disabledForecastButton = false;
  }

  onResetControls() {
      this.cityName = '';
      this.disabledForecastButton = true;
  }
   
  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value.website);
    this.cityName = this.form.value.website;
    this.onSubmitDatabinding();
  }
}
