import { Component, OnInit } from '@angular/core';
import { ElmurzayevService, IDog, ICat } from './elmurzayev.service';


@Component({
  selector: 'app-elmurzayev3',
  templateUrl: './elmurzayev3.component.html',
  styleUrls: ['./elmurzayev3.component.css']
})
export class Elmurzayev3Component implements OnInit {
  dogImages: IDog[];
  catImages: ICat[];
  hideDogImage: boolean = true;
  hideCatImage: boolean=true;
  dogUrl: string;
  counter: number = 0;

  constructor(private service: ElmurzayevService) {

  }

  ngOnInit() {
  }
  showImage = () => {
    if (this.counter == 0) {
      alert("je hebt niets geselecteerd");
    }
    else if (this.counter == 1) {
      this.service.catImages.subscribe(d => this.catImages = d);
      this.hideDogImage=true;
      this.hideCatImage=false;
      document.getElementById('catImage').style.display='visible';
      document.getElementById('dogImage').style.display='none';
      
    }
    else if (this.counter == 2) {
      this.service.dogImages.subscribe(d => this.dogImages = d);
      this.hideDogImage = false;
      document.getElementById('dogImage').style.display='visible';
      document.getElementById('catImage').style.display='none';
    }



  }
}
