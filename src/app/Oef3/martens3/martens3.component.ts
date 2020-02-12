import { Component, OnInit } from '@angular/core';
import { MartensService, Memes, Meme } from './martens.service';


@Component({
  selector: 'app-martens3',
  templateUrl: './martens3.component.html',
  styleUrls: ['./martens3.component.css']
})
export class Martens3Component implements OnInit {

  ParentString: string = "Dit is @input string";
  Memes : Memes;
  MemeList : Meme[];
  SelectedMeme:Number;
  MemeUrl:string;
  Boxes:number;


  constructor(private svcmemes:MartensService) { 

    this.svcmemes.getMeme().subscribe(x=> {
      this.Memes = x;
      this.MemeUrl=x.data.memes[0].url;
      this.Boxes=x.data.memes[0].box_count;
    })

    }

    MemeTonen(index: number){
      console.log(index);
      this.MemeUrl=this.Memes.data.memes[index].url;
      this.Boxes=this.Memes.data.memes[index].box_count;
    }
   


  ngOnInit() {
    }

}
