import { WeatherService } from './weather-service'
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

describe('#Weather Service', () => {
    let service: WeatherService;
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
    TestBed.configureTestingModule({
        imports: [
            BrowserModule,
            HttpTestingController,
            HttpClientTestingModule,
            HttpClientModule,
            HttpClient
        ]
    })
    beforeEach((() => {
        service = TestBed.get(WeatherService)
    }));
    it('5should be created', () => {
        expect(service).toBeTruthy();
    });

    it('6should return weather condition of given city', inject([HttpClient, HttpClientTestingModule, WeatherService],
        (http: HttpClient, httpMock: HttpTestingController) => {
            const cityName = 'London';
            service.getWeathersByCity(cityName).subscribe(res => {
                expect(res).toEqual(mockWeatherData)
            });
            httpMock.expectOne('http://api.openweathermap.org/data/2.5/weather?q=London&appid=cb28191efc177b83a192fc103fd30bad&units=metric').flush(mockWeatherData)
            httpMock.verify();
        }));

    it('7should return weather details of given city', inject([HttpClient, HttpClientTestingModule, WeatherService],
        (http: HttpClient, httpMock: HttpTestingController) => {
            const cityName = 'Paris';
            service.getWeatherDetailsByCity(cityName).subscribe(res => {
                expect(res).toEqual(mockWeatherDetails)
            });
            httpMock.expectOne('http://api.openweathermap.org/data/2.5/forecast?q=Paris&appid=cb28191efc177b83a192fc103fd30bad&units=metric').flush(mockWeatherData)
            httpMock.verify();
        }));

    it('8should return error weather condition of given city', inject([HttpClient, HttpClientTestingModule, WeatherService],
        (http: HttpClient, httpMock: HttpTestingController) => {
            const cityName = 'London';
            service.getWeathersByCity(cityName).subscribe(res => { }, err => {
                expect(err).toBeDefined();
            });

        }));

});
