import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { WeatherService } from '../services/weather-service'

@Component({
  selector: 'weather-details-component',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  public cityName: string;
  public detailsList: any;

  constructor(private readonly route: ActivatedRoute, private readonly weatherService: WeatherService) {
    this.cityName = this.route.snapshot.params['city']
  }

  ngOnInit() {
    this.getWeatherDetails()
  }

  public getWeatherDetails() {
    this.weatherService.getWeatherDetailsByCity(this.cityName)
      .subscribe((response: any) => {
        if (response && response.list) {
          this.detailsList = response.list
        }
      }, (err) => { console.log(err) })

  }
}
