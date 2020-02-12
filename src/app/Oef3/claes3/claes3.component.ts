import { Component, OnInit } from '@angular/core';
import { ClaesService } from './claes.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-claes3',
  templateUrl: './claes3.component.html',
  styleUrls: ['./claes3.component.css']
})
export class Claes3Component implements OnInit {

  title: string;
  image: string;
  summary: string;
  sumDoc: HtmlParser;
  HtmlObj: Variable | null;
  titles: string[] = [];
  ids: number[] = [];
  images: string[] = []
  id: number;
  i: number;
  toggleChild: boolean | false;
  constructor(private claessrv: ClaesService) {

  }

  SearchRecipes(ingredient: string) {

    this.claessrv.GetData(ingredient).subscribe((result) => {
      for (this.i = 0; this.i < result.results.length; this.i++) {
        this.titles[this.i] = result.results[this.i].title;
        this.ids[this.i] = result.results[this.i].id;
        this.images[this.i] = result.results[this.i].image;
      }
    });
  }
  SearchSummary(sumId: string) {
    console.log("Get summary of id: " + sumId);
    this.claessrv.GetSummary(sumId).subscribe((result) => {
      //this.summary=result.summary;
      this.summary = result.summary;
    });
  }
  SetToggleAble() {
    this.toggleChild = true;
  }

  ngOnInit() {
  }

}
