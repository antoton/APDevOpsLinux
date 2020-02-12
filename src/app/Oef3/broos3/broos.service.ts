import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BroosService {

  apiKey='b95d22d6e8369694128acb48a44469d6';
  url;

  constructor(private http: HttpClient) { 
    this.url='http://api.openweathermap.org/data/2.5/forecast?q=';
  }

  getWeather(city, code){
    return this.http.get(this.url+city+','+code+'&APPID='+this.apiKey);

  }
}
