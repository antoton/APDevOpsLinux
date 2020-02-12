import { Component, OnInit, ViewChild } from '@angular/core';
import { GokceService, IAvatars, IFace } from './gokce.service';
import { JsonPipe } from '@angular/common';
import { ColorPickerModule } from 'primeng/colorpicker';
import { GokceChildComponent } from './gokce-child/gokce-child.component';
import { read } from 'fs';

@Component({
  selector: 'app-gokce3',
  templateUrl: './gokce3.component.html',
  styleUrls: ['./gokce3.component.css']
})
export class Gokce3Component implements OnInit {

  @ViewChild(GokceChildComponent, { static: false }) child: GokceChildComponent;


  selectOog: string = "eyes1";
  selectNeus: string = "nose2";
  selectMond: string = "mouth1";
  inFace: IFace;
  imageAdorable: string = `https://api.adorable.io/avatars/face/eyes4/nose3/mouth7/8e8895`;

  selectNaam: string = "G";
  selectType: string = "human";
  selectMood: string = "happy";
  showMood: boolean = false;
  inAvatars: IAvatars;
  Image = `https://avatars.dicebear.com/v2/male/john.svg?options[mood][]=happy`

  constructor(private service: GokceService) {

    this.service.GetAPI().subscribe(result => {
      this.LookMood();
      this.inAvatars = result.avatars;
      // this.Image = `https://avatars.dicebear.com/v2/male/john.svg?options[mood][]=happy`
    })

    this.service.GetAdorable().subscribe(result2 => {
      this.inFace = result2.face;
      // this.imageurl = `https://api.adorable.io/avatars/face/${this.inFace.eyes[0]}/${this.inFace.nose[0]}/${this.inFace.mouth[0]}/8e8895`
    })

  }

  ChangeAdorable(eyes: string, nose: string, mouth: string) {
    this.imageAdorable = `https://api.adorable.io/avatars/face/${eyes}/${nose}/${mouth}/8e8895`
  }

  LookMood() {
    if (this.selectType == "human" || this.selectType == "male" || this.selectType == "female") {
      this.showMood = true;
    }
    else {
      this.showMood = false;
    }
  }

  ngOnInit() {

  }

}
