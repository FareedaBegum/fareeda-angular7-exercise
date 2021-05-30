import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class WeatherService {

    constructor(private readonly httpClient: HttpClient) { }


    public getWeathersByCity(cityName: string): Observable<any> {
        return this.httpClient.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cb28191efc177b83a192fc103fd30bad&units=metric`)
            .pipe(map((res: any) => res))
    }

    public getWeatherDetailsByCity(cityName: string): Observable<any> {
        return this.httpClient.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=cb28191efc177b83a192fc103fd30bad&units=metric`)
            .pipe(map((res: any) => res))
    }


}