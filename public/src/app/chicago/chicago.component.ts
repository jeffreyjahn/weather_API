import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  current: any;
  ngOnInit() {
    this.current = {};
    this.getChicagoFromService();
  }
  getChicagoFromService(){
    this._httpService.getChicago()
      .subscribe(data=>{
        console.log("waddup chicago", data);
        this.current = data;
      })
  }
}
