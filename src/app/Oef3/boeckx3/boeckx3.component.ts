import { Component, OnInit, Input } from '@angular/core';
import { BoeckxService } from './boeckx.service';
import { StickyDirection } from '@angular/cdk/table';

@Component({
  selector: 'app-boeckx3',
  templateUrl: './boeckx3.component.html',
  styleUrls: ['./boeckx3.component.css']
})
export class Boeckx3Component implements OnInit {

  MopjesTonen: Boolean = true;

  generateBelgianName: boolean = false;
  btnBelgium: string = "Random naam uit België";
  btnGermany: string = "Random naam uit Duitsland";
  txtKop: string = "🠰🠰 If you would like to generate a random name, hit the button 🠲🠲";

  surname: string = null;
  name: string = null;
  gender: string = null;
  addressing: string = null;

  constructor(private service: BoeckxService) {
  }

  getRandomName(antwoord: boolean) {
    this.generateBelgianName = antwoord
    this.addressing =  "Mr. "; //zodat het sowieso een waarde krijgt de 1ste run
    if (this.generateBelgianName) {
      this.service.GetRandomnameBelgiumFromAPI().subscribe(result => {
        this.surname = result.surname;
        this.name = result.name;
        this.gender = result.gender;

        this.getAddressing();
      })
    }
    else {
      this.service.GetRandomnameGermanyFromAPI().subscribe(result => {
        this.name = result.name;
        this.surname = result.surname;
        this.gender = result.gender;

        this.getAddressing();
        
      })
    }
  }

  

  getAddressing(){
    if (this.gender == 'female') {
      this.addressing = "Mevr. ";
    } 
    else 
    {
      if(this.gender == 'male'){
        this.addressing = "Mr. ";
      }
    }
  }

  ngOnInit() {
  }

}
