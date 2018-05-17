import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  // let myKey = "&&appid=81a0bb229a405010e8d37798c50cc122"
  getBurbank(){
    return this._http.get("https://api.openweathermap.org/data/2.5/weather?q=Burbank&units=imperial&appid=81a0bb229a405010e8d37798c50cc122");
  }
  getChicago(){
    return this._http.get("https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=81a0bb229a405010e8d37798c50cc122");
  }
  getDallas(){
    return this._http.get("https://api.openweathermap.org/data/2.5/weather?q=Dallas&units=imperial&appid=81a0bb229a405010e8d37798c50cc122");
  }
  getDc(){
    return this._http.get("https://api.openweathermap.org/data/2.5/weather?q=Washington DC.&units=imperial&appid=81a0bb229a405010e8d37798c50cc122");
  }
  getSanjose(){
    return this._http.get("https://api.openweathermap.org/data/2.5/weather?q=San Jose&units=imperial&appid=81a0bb229a405010e8d37798c50cc122");
  }
  getSeattle(){
    return this._http.get("https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=81a0bb229a405010e8d37798c50cc122");
  }
}
