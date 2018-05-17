import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  current: any;
  ngOnInit() {
    this.current = {};
    this.getDcFromService();
  }
  getDcFromService(){
    this._httpService.getDc()
      .subscribe(data=>{
        console.log("waddup DC", data);
        this.current = data;
      })
  }
}
