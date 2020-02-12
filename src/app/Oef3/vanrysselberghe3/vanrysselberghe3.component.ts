import { Component, OnInit } from '@angular/core';
import { VanrysselbergheService } from './vanrysselberghe.service';

@Component({
  selector: 'app-vanrysselberghe3',
  templateUrl: './vanrysselberghe3.component.html',
  styleUrls: ['./vanrysselberghe3.component.css']
})
export class Vanrysselberghe3Component implements OnInit {
  catgory:string;
  rocket:string="Falcon";
  startDate:string;
  endDate:string;
  rocketInfo:IRocket[];
  launchInfo:ILaunch[];

  constructor(private service : VanrysselbergheService) {
  }

  FindRocket(rocket: string){
    this.rocketInfo = [];
    this.service.RocketList(rocket).subscribe((result) => {
      for (let r of result.rockets){
      this.rocketInfo.push({
        name:r.name,
        defaultPads:r.defaultPads,
        wikiUrl:r.wikiURL,
        imageUrl:r.imageURL
      })
    }
    })
  }

  FindLaunches(startDate: string, endDate: string){
    this.launchInfo = [];
    if (endDate != null && endDate != ""){
    this.service.DateList(startDate,endDate).subscribe((result) => {
      for (let l of result.launches){
      this.launchInfo.push({
        name:l.name,
        windowstart:l.windowstart,
        windowend:l.windowend,
        rocketName:l.rocket.name
      })
    }
    })
  }
  else {
    this.service.DateListSingle(startDate).subscribe((result) => {
      for (let l of result.launches){
      this.launchInfo.push({
        name:l.name,
        windowstart:l.windowstart,
        windowend:l.windowend,
        rocketName:l.rocket.name
      })
    }
    })
  }
  }
  ngOnInit() {
  }

}

export interface IRocket{
  name:string;
  defaultPads:string;
  wikiUrl:string;
  imageUrl:string;
}

export interface ILaunch{
  name:string;
  windowstart:string;
  windowend:string;
  rocketName:string;
}
