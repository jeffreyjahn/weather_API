import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {

  constructor(private _httpService:HttpService) { }
  current: any;
  ngOnInit() {
    this.current = {};
    this.getSanjoseFromService();
  }
  getSanjoseFromService(){
    this._httpService.getSanjose()
      .subscribe(data=>{
        console.log("waddup San jose", data);
        this.current = data;
      })
  }
}
