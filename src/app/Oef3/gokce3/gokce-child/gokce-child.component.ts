import { Component, OnInit, Input } from '@angular/core';
import { GokceService } from '../gokce.service';
import { BoeckxService, IRandomNameAPI } from '../../boeckx3/boeckx.service';


@Component({
  selector: 'app-gokce-child',
  templateUrl: './gokce-child.component.html',
  styleUrls: ['./gokce-child.component.css']
})
export class GokceChildComponent implements OnInit {

  constructor(private svc: GokceService, private svcBoeckx: BoeckxService) { }

  Image: string = `https://avatars.dicebear.com/v2/human/G.svg?options[mood][]=happy`

  @Input('type') gettype: string;
  @Input('name') getname: string;
  @Input('mood') getmood: string;

  boeckxbool: boolean = false;;

  //Het te veel requesten van een random Belgian/German leidt tot een CORS Block.
  //Als je dat tegenkomt, moet je eventjes wachten voor dat je een nieuwe request doet.
  //Daarom heb ik random Belgian/German in een click event gevoegd ipv mouseover.

  GetRandomBelgian() {
    this.svcBoeckx.GetRandomnameBelgiumFromAPI().subscribe(result => {
      this.getname = result.name.toString() + " " + result.surname.toString();
      this.gettype = result.gender.toString();
      this.Image = this.svc.GetAvatar(this.gettype, this.getname, this.getmood);
      this.boeckxbool = true;
    })
  }

  GetRandomGerman() {
    this.svcBoeckx.GetRandomnameGermanyFromAPI().subscribe(result => {
      this.getname = result.name.toString() + " " + result.surname.toString();
      this.gettype = result.gender.toString();
      this.Image = this.svc.GetAvatar(this.gettype, this.getname, this.getmood);
      this.boeckxbool = true;
    })
  }

  ChangeFace(type: string, naam: string, mood: string) {
    this.Image = this.svc.GetAvatar(type, naam, mood);
    this.boeckxbool = false;
  }

  ngOnInit() {
  }

}
