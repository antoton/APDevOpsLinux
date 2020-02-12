import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shani-child',
  templateUrl: './shani-child.component.html',
  styleUrls: ['./shani-child.component.css']
})
export class ShaniChildComponent implements OnInit {

  constructor() { }
  @Input() parentTitle: string;
  ngOnInit() {
  }

}
