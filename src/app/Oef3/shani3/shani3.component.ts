import { Component, OnInit } from '@angular/core';
import { ShaniService } from './shani.service';

@Component({
  selector: 'app-shani3',
  templateUrl: './shani3.component.html',
  styleUrls: ['./shani3.component.css']
})
export class Shani3Component implements OnInit {

  rocketName: string = "";
  launchData: ILaunchData;
  timelineData: ITimeLineData;
  missionID: number;
  parentTitle: string = "Get info from SpaceX lauches";
  images: string[] = new Array();
  videoLink: string;

  constructor(private spaceXService: ShaniService) { }

  ngOnInit() {
  }

  GetLaunchInfo(launchID: number){
    if (launchID > 0) {
      this.spaceXService.GetData(launchID).subscribe((result) => {
        this.launchData = {
          rocketName: result.rocket.rocket_name,
          missionName: result.mission_name,
          missionID: result.mission_id,
          flickrImages: result.links.flickr_images,
          launchDate: result.launch_date_utc,
        }
        this.images = this.launchData.flickrImages;
        this.timelineData = {
          ignition: result.timeline.ignition,
          liftoff: result.timeline.liftoff,
          maxq: result.timeline.maxq,
          stageSep: result.timeline.stage_sep,
          secondStageIgnition: result.timeline.second_stage_ignition,
          fairingDeploy: result.timeline.fairing_deploy,
          firstStageEntryBurn: result.timeline.first_stage_entry_burn,
          firstStageLanding: result.timeline.first_stage_landing,
          payloadDeploy: result.timeline.payload_deploy,
        }
      })
    }
    
  }
}

export interface ILaunchData{
  rocketName: string;
  missionName: string;
  missionID: string;
  flickrImages: string[];
  launchDate: string;
}

export interface ITimeLineData{
  ignition: number;
  liftoff: number;
  maxq: number;
  stageSep: number;
  secondStageIgnition: number;
  fairingDeploy: number;
  firstStageEntryBurn: number;
  firstStageLanding: number;
  payloadDeploy: number;
}