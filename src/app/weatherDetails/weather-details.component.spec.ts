
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { WeatherService } from '../services/weather-service';
import { WeatherDetailsComponent } from '../weatherDetails/weather-details.component';
import { HttpClientModule } from '@angular/common/http'

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('#Weather Details Component', () => {
  let component: WeatherDetailsComponent;
  let fixture: ComponentFixture<WeatherDetailsComponent>;
  let service: WeatherService;
  let spy: jasmine.Spy
  //let h2: HTMLElement;
  const mockWeatherDetails = <any>{
    city: { id: 2643743, name: "London" },
    list: [
      {
        dt_txt: "2021-05-30 09:00:00",
        main: {
          feels_like: 10.99,
          grnd_level: 1025,
          humidity: 75,
          pressure: 1029,
          sea_level: 1029,
          temp: 11.8,
          temp_kf: -3.79,
          temp_max: 15.59,
          temp_min: 11.8
        },
        sys: {
          country: "GB",
          id: 268730,
          sunrise: 1622346644,
          sunset: 1622405144,
          type: 2
        },
        weather: [{
          description: "overcast clouds",
          icon: "04d",
          id: 804,
          main: "Clouds"
        }]
      },

      {
        dt_txt: "2021-05-30 12:00:00",
        main: {
          feels_like: 10.99,
          grnd_level: 1025,
          humidity: 75,
          pressure: 1029,
          sea_level: 1029,
          temp: 11.8,
          temp_kf: -3.79,
          temp_max: 15.59,
          temp_min: 11.8
        },
        sys: {
          country: "GB",
          id: 268730,
          sunrise: 1622346644,
          sunset: 1622405144,
          type: 2
        },
        weather: [{
          description: "overcast clouds",
          icon: "04d",
          id: 804,
          main: "Clouds"
        }]
      }
    ]


  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule,
        HttpClientModule],
      declarations: [WeatherDetailsComponent],
      providers: [WeatherService]
    });
    fixture = TestBed.createComponent(WeatherDetailsComponent);
    component = fixture.componentInstance;
    //h2 = fixture.nativeElement.querySelector('h1');
    service = TestBed.get(WeatherService);
    fixture.detectChanges();
  });

  it('3should create', () => {
    expect(component).toBeTruthy();
  });

  it('4should get weather details by city', async(() => {
    // spy = spyOn(service, 'getWeatherDetailsByCity').and.callFake(res => {
    //   return mockWeatherDetails
    // });
    spy =  spyOn(service, 'getWeatherDetailsByCity').and.returnValue(mockWeatherDetails)
    component.getWeatherDetails();
    // expect(spy).toHaveBeenCalled()
    expect(component.getWeatherDetails).toHaveBeenCalled()
  }));

});
