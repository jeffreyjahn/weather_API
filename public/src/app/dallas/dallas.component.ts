import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  current: any;
  ngOnInit() {
    this.current = {};
    this.getDallasFromService();
  }
  getDallasFromService(){
    this._httpService.getDallas()
      .subscribe(data=>{
        console.log("waddup dallas", data);
        this.current = data;
      })
  }
}
