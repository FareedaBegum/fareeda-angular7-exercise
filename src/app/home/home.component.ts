import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather-service'

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public weatherList = []
  private fiveCities = ['London', 'Berlin', 'Paris', 'Madrid', 'Rome']
  constructor(private readonly weatherService: WeatherService) {

  }
  ngOnInit() {
    this.getallCityWeathers()
  }

  public getallCityWeathers() {
    this.fiveCities.forEach((city) => {
      this.weatherService.getWeathersByCity(city)
        .subscribe((response: any) => {
         // console.log('response', response)
          if (response && response.main) {
            this.weatherList.push(response)
          }
        }, (err) => { console.log(err) })
    })
  }
}
