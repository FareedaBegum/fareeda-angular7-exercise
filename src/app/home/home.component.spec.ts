import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { WeatherService } from '../services/weather-service';
import { HomeComponent } from '../home/home.component';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('#Home Component', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: WeatherService;
  let spy: jasmine.Spy
  const mockWeatherData = <any>{
    name: "London",
    main: {
      feels_like: 9.82,
      humidity: 85,
      pressure: 1030,
      temp: 9.82,
      temp_max: 11.25,
      temp_min: 8.26
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule,
        HttpClientModule],
      declarations: [HomeComponent],
      providers: [WeatherService]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    // h2 = fixture.nativeElement.querySelector('h1');
    service = TestBed.get(WeatherService);
    fixture.detectChanges();
  });

  it('1should create', () => {
    expect(component).toBeTruthy();
  });

  it('2should get weather data by city', async(() => {
    spy = spyOn(service, 'getWeathersByCity').and.callFake(res => {
      return mockWeatherData
    });
    component.getallCityWeathers();
    // expect(spy).toHaveBeenCalled()
    expect(component.getallCityWeathers).toHaveBeenCalled()
    // expect(component.getallCityWeathers).toEqual(mockWeatherData)
  }));

});
