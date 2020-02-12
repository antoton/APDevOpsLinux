import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-coucke3',
  templateUrl: './coucke3.component.html',
  styleUrls: ['./coucke3.component.css'],
  
})
export class Coucke3Component implements OnInit {

  plaats:string = "plaats";
  population:number;
  name:string;
  currency:string;

  constructor() 
  { 
    this.plaats = "plaats";
  }

  ngOnInit() 
  {
  }

  ChangePlace = (value) => 
  {
    this.plaats = value;
  }



}
