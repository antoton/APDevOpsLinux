import { Component, OnInit, Input } from '@angular/core';
import {WieselbladService, IJoke} from '../wieselblad.service';


@Component({
  selector: 'app-wieselblad-child',
  templateUrl: './wieselblad-child.component.html',
  styleUrls: ['./wieselblad-child.component.css']
})

export class WieselbladChildComponent implements OnInit {

  
  @Input("Voornaam") voornaam:string;
  @Input("Naam") naam:string;
  constructor(private service: WieselbladService)
  {
    
  }

  ngOnInit() {
  }

}
