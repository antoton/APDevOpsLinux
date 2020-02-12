import { Component, OnInit, Input } from '@angular/core';
import { AbrarService } from '../../abrar3/abrar.service';


@Component({
  selector: 'app-martens-child',
  templateUrl: './martens-child.component.html',
  styleUrls: ['./martens-child.component.css']
})
export class MartensChildComponent implements OnInit {

  @Input() ParentString: string;



  constructor() {

  }


  ngOnInit() {
  }

}
