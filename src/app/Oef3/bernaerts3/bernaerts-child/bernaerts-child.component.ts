import { Component, OnInit } from '@angular/core';
import { Memes, Meme, MartensService } from '../../martens3/martens.service';
import { BernaertsService } from '../bernaerts.service';



@Component({
  selector: 'app-bernaerts-child',
  templateUrl: './bernaerts-child.component.html',
  styleUrls: ['./bernaerts-child.component.css']
})
export class BernaertsChildComponent implements OnInit {

  constructor(private otherServ: MartensService) { }

  memes: Memes;
  meme:Meme;
  getMeme(){
    this.meme=this.memes.data.memes[Math.floor(Math.random()*this.memes.data.memes.length)]
  }
  
  ngOnInit() {
    this.otherServ.getMeme().subscribe(result => this.memes = result);
    
  }

}
