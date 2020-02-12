import { Component, OnInit, Input } from '@angular/core';
import { AbrarService } from '../../abrar3/abrar.service';
import { YoncalikService } from '../../yoncalik3/yoncalik.service';

@Component({
  selector: 'app-elmoufid-child',
  templateUrl: './elmoufid-child.component.html',
  styleUrls: ['./elmoufid-child.component.css']
})
export class ElmoufidChildComponent implements OnInit {

  @Input("Title1") title1: string;
  @Input("Title2") title2: string;
  @Input("Money") money: number;


  secondService: AbrarService;
  thirdService: YoncalikService;

  GenaratedPassword: string;
  CurrentIPAdress: string;
  explainVideo: string;

  constructor(private Service2: AbrarService, private Service3: YoncalikService) {
    this.GenaratedPassword = "NO PASSWORD GENERATED YET";
    this.CurrentIPAdress = "PRESS ON BUTTON TO SHOW";
    this.explainVideo = "https://www.youtube.com/watch?v=fiMnRt1iP5c";
    this.secondService = Service2;
    this.thirdService = Service3;
  }

  GenerateNewPassword(input1: number): void {
    this.secondService.GetData(input1, 1).subscribe((result) => {
      this.GenaratedPassword = result.passwords[0];
    })
  }

  ShowCurrentIPAdress(): void {
    this.thirdService.getIpAddress().subscribe((result) => {
      this.CurrentIPAdress = result['ip'];
    })
  }

  ngOnInit() {
  }

}
