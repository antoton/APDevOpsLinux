import { Component, OnInit } from '@angular/core';
import { FaesService, IGame } from './faes.service';
import { MartensService, Meme } from '../martens3/martens.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-faes3',
  templateUrl: './faes3.component.html',
  styleUrls: ['./faes3.component.css']
})
export class Faes3Component implements OnInit {

  constructor(private faes: FaesService, private memes: MartensService) { }

  currentMeme: Meme;
  currentGames: IGame[];

  ngOnInit() {
    this.currentGames = [];
  }

  getGames(query: string){
    this.currentGames = [];
    this.faes.searchGames(query).subscribe(result =>{
      this.currentGames = result.results
      console.log(this.currentGames)
    })
  }

  getRandomMeme(){
    var lodash = _.random(0, 50);
    this.memes.getMeme().subscribe(meme =>{
      this.currentMeme = meme.data.memes[lodash];
    })
  }

}
