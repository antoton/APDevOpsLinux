import { Component, OnInit } from '@angular/core';
import { VandenheuvelService, IRandomFactAPI } from './vandenheuvel.service';
import { BaetenService } from '../baeten3/baeten.service';

@Component({
  selector: 'app-vandenheuvel3',
  templateUrl: './vandenheuvel3.component.html',
  styleUrls: ['./vandenheuvel3.component.css']
})
export class Vandenheuvel3Component implements OnInit {
  public today:Date;
  day:number;
  month:number;
  Number: string;
  NumberGotten: Number;
  NumberFact: string;
  GottenFact: boolean;
  Joke: string = "";
  Punchline: string = "";
  GotJoke : boolean;

  constructor(private FactService: VandenheuvelService, private OtherService: BaetenService) {
    this.today = new Date();
    this.day = this.today.getDay();
    this.month = this.today.getMonth();
    this.GottenFact = false;
    this.NumberFact = "";
  }

  GetFact() {
    if (this.Number != null && this.Number != ""){
    this.NumberGotten = parseInt(this.Number);
    this.FactService.GetNumberFact(this.Number).subscribe(result => {this.NumberFact = result.text; this.NumberGotten = result.number})
    }
    else {
      this.NumberGotten = 2;
      this.FactService.GetRandomFact().subscribe(result=>{this.NumberGotten = result.number; this.NumberFact = result.text})
    }
    this.GottenFact = true;
  }

  GetJoke() {
    this.Joke="Hold"; this.Punchline="on."
    this.OtherService.GetRandomNormalJokeFromAPI().subscribe(result=>{this.Joke = result.setup; this.Punchline = result.punchline})
    this.GotJoke=true;
  }

  ngOnInit() {
  }
  

}
