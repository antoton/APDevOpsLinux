import { Component, OnInit } from '@angular/core';
import { BernaertsService, IFoto_API} from './bernaerts.service'

@Component({
  selector: 'app-bernaerts3',
  templateUrl: './bernaerts3.component.html',
  styleUrls: ['./bernaerts3.component.css']
})
export class Bernaerts3Component implements OnInit {

  imageFox:string;
  fotoData:IFoto_API;
  
  constructor(private myServ: BernaertsService) { 

      this.myServ.GetRandomFoxAPI().subscribe(x=>{
        this.fotoData=x;
      })
  }

  GetImage(){
    this.imageFox=this.fotoData.image;
  }
  
  ngOnInit() {
  }

}
