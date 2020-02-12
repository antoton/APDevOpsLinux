import { Component, OnInit } from '@angular/core';
import { WieselbladService } from './wieselblad.service';
import {FormsModule} from '@angular/forms';
import { VandrielService, IFuck } from '../vandriel3/vandriel.service';

@Component({
  selector: 'app-wieselblad3',
  templateUrl: './wieselblad3.component.html',
  styleUrls: ['./wieselblad3.component.css']
})
export class Wieselblad3Component implements OnInit {

  naam: string = "Norris";
  voornaam:string = "Chuck";
  CNgrap:string;
  PERgrap:string;

  constructor(private service: WieselbladService, private service2: VandrielService) {
    // this.service.GetData().subscribe((result)=>{
    //   this.CNgrap = result.value.joke;
    // });
   }

  

  ngOnInit() {
  }

  GetNewJoke(){
    this.service.GetData().subscribe((result)=>{
      this.CNgrap = result.value.joke;
    });
    
  }

  GetPersonalJoke( voornaam: string, naam: string){
    this.service.GetPersonalData(voornaam, naam).subscribe((result)=>{
      this.PERgrap = result.value.joke;
    });
  }

  text: IFuck;
  Get(To, From) {
    if (To != "" && From != "") {
      this.service2.GetFuckOffFromAPI(To, From).subscribe(result => {
        this.text = <IFuck>result;
      });
    }
  }

}
