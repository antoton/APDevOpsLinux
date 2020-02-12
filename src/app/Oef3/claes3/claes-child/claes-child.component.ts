import { Component, OnInit, Input } from '@angular/core';
import { VangoethemService } from '../../vangoethem3/vangoethem.service';



@Component({
  selector: 'app-claes-child',
  templateUrl: './claes-child.component.html',
  styleUrls: ['./claes-child.component.css']
})
export class ClaesChildComponent implements OnInit {

  @Input() PanelToggle: boolean;

  IdMeal: string = "52771"
  RecipeInfo: IRecipeDisplay;

  constructor(private othersrv:VangoethemService) { 
    
  }

  SearchOtherRecipe(idMeal:string){
    this.othersrv.GetData(idMeal).subscribe((info) => {
      this.RecipeInfo = {
        strMeal: info.meals[0].strMeal,
        strArea: info.meals[0].strArea,
        strInstructions: info.meals[0].strInstructions
      };
    })
    
  }

  ngOnInit() {
  }

}
export interface IRecipeDisplay {
  strMeal: any;
  strArea: string;
  strInstructions: string;
}
