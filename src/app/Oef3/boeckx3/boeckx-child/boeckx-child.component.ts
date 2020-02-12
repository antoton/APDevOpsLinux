import { Component, OnInit, Input } from '@angular/core';
import { BaetenService } from '../../baeten3/baeten.service';

@Component({
  selector: 'app-boeckx-child',
  templateUrl: './boeckx-child.component.html',
  styleUrls: ['./boeckx-child.component.css']
})
export class BoeckxChildComponent implements OnInit {

  @Input("MopjesTonen") MopjesTonen: boolean;

  mopje: string = null;
  mopje2: string = null;  
  buttontext: string = "🙋‍♂️ !Klik hier! 🙋‍♂️";

  constructor(private svc2:BaetenService){}

  getJoke(){
    if(this.MopjesTonen=true){
      this.svc2.GetRandomNormalJokeFromAPI().subscribe(result => {
        this.mopje = result.setup;
        this.mopje2 = result.punchline;
      })
    }

  }

  ngOnInit() {
  }

}
