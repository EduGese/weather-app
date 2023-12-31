import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'frAtizx74n5pxXhxv8g0YKkak1ULmdpL'; 
  private baseUrl = 'https://dataservice.accuweather.com';

  
  private baseUrlMeteo = 'https://api.open-meteo.com';

  constructor(private http: HttpClient) { }

  getOpenMeteoWeatherDailyForecast(lat: number, lon: number): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrlMeteo}/v1/forecast`, {
      params:{
        latitude : lat,
        longitude : lon,
        daily : 'weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max,winddirection_10m_dominant,sunrise,sunset',
        timezone : 'Europe/Berlin'


      }
    })
  }
  getOpenMeteoWeatherHourlyForecast(lat: number, lon: number): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrlMeteo}/v1/forecast`, {
      params:{
        latitude : lat,
        longitude : lon,
        hourly : 'temperature_2m,weathercode,windspeed_10m,winddirection_10m,is_day,precipitation_probability',
        timezone : 'Europe/Berlin'


      }
    })
  }

  

  
  
}
