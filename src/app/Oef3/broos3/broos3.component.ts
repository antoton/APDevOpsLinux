import { Component, OnInit } from '@angular/core';
import { BroosService } from './broos.service';

@Component({
  selector: 'app-broos3',
  templateUrl: './broos3.component.html',
  styleUrls: ['./broos3.component.css']
})
export class Broos3Component implements OnInit {

  location={
    city:'london',
    code:'uk'
  }

  weather:any;
  value:any;
  city:string;
  code:string;

  constructor(private _weatherService:BroosService) {}

  ngOnInit() {
    this.value=localStorage.getItem('location');
    if(this.value != null){
      this.location=JSON.parse(this.value);
    }else{
      this.location={
        city:'london',
        code:'uk'
      }
    }
    this._weatherService.getWeather(this.location.city, this.location.code).subscribe((response)=>{
      this.weather=response;
    });
  }

  save(){
    let location={
      city:this.city,
      code:this.code
    }
    localStorage.setItem('location',JSON.stringify(location));
    window.location.reload();
  }

}

