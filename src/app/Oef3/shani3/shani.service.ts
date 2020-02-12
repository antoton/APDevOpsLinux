import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShaniService {

  constructor(private _http: HttpClient) { }

  GetData(launchID){
    return this._http.get<IMisionInfo>(`https://api.spacexdata.com/v3/launches/${launchID}`);
  }
}

export interface IMisionInfo{
  mission_name: string;
  mission_id: string;
  rocket_name: string;
  launch_date_utc: string;
  launch_info: ILaunchInfo;
  rocket: IRocketInfo; 
  links: ILinks;
  timeline: ITimeline;
}

export interface ILaunchInfo{
  launch_year: string;
  launch_date_utc: string;
}

export interface IRocketInfo{
  rocket_name: string;
}

export interface ILinks{
  flickr_images: string[];
}

export interface ITimeline{
  ignition: number;
  liftoff: number;
  maxq: number;
  stage_sep: number;
  second_stage_ignition: number;
  fairing_deploy: number;
  first_stage_entry_burn: number;
  first_stage_landing: number;
  payload_deploy: number;
}