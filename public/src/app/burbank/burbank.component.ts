import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  current: any;
  ngOnInit() {
    this.current = {};
    this.getBurbankFromService();
  }
  getBurbankFromService(){
    this._httpService.getBurbank()
      .subscribe(data=>{
        console.log("waddup burbank", data);
        this.current = data;
      })
  }
}
