import { Component, OnInit } from '@angular/core';
import { YilmazService,  } from './yilmaz.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { YoncalikService } from '../yoncalik3/yoncalik.service';


@Component({
  selector: 'app-yilmaz3',
  templateUrl: './yilmaz3.component.html',
  styleUrls: ['./yilmaz3.component.css']
})
export class Yilmaz3Component implements OnInit {

  input : string = "";
  SwitchComp: boolean = false;

  IpInformation ;

  constructor(private SvsIp : YoncalikService) {

   }

   NiewMethode = (value) =>
    {
      //console.log("binnen")
      this.input = value;
    }

    SwitchService = () =>
    {
      this.SwitchComp = !this.SwitchComp;
    }


  ngOnInit() {
    
   this.SvsIp.getIpAddress().subscribe(result =>{
     this.IpInformation = result;
     //console.log(this.IpInformation);

   });

  }
  

}
