import { Component, OnInit, Input } from '@angular/core';
import { IGame } from '../faes.service';

@Component({
  selector: 'app-faes-child',
  templateUrl: './faes-child.component.html',
  styleUrls: ['./faes-child.component.css']
})
export class FaesChildComponent implements OnInit {

  constructor() { }

  @Input('currentGames') currentGames: IGame[];

  ngOnInit() {
  }

}
