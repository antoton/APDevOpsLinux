import { Component, OnInit, Input } from '@angular/core';
import { AouragheService } from '../aouraghe.service';
import { GokceService } from '../../gokce3/gokce.service';

@Component({
  selector: 'app-aouraghe-child',
  templateUrl: './aouraghe-child.component.html',
  styleUrls: ['./aouraghe-child.component.css']
})
export class AouragheChildComponent implements OnInit {
  @Input('Location') value : string;
  public Data: string = "";
  public display: boolean = false;
  public AllArtikles: IArticleDisplay[];
  private ArticleInfo: IArticleDisplay;
  constructor(private service: AouragheService, private service2: GokceService) { }
  
  toggle(){
    this.Data = this.value;
    this.service.GetApiCall(this.Data).subscribe((result) => {
      console.log(result);
      this.AllArtikles = []
      for (let index = 0; index < 5; index++) {
        this.AllArtikles.push(
          this.ArticleInfo = {
            Title: result.articles[index].title,
            Source: result.articles[index].source.name,
            Status: result.status,
            img: result.articles[index].urlToImage,
            Description: result.articles[index].description,
          })
      }
    }, (error => { console.log("niet gevonden") }))
  }

  get Location() {
    return this.Data;
  }

 
  
  Avatar(random: string){
    return this.service2.GetAvatar("initials",random,"happy");
  }

  

  ngOnInit() {
  }

}
export interface IArticleDisplay {
  Source: string;
  Title: string;
  Status: string;
  img : string;
  Description: string;
}
