import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vandenheuvel3Component } from './vandenheuvel3.component';


@Injectable({
  providedIn: 'root'
})
export class VandenheuvelService {

  constructor(private client: HttpClient) { }
  
  GetNumberFact = (NumberWanted:string) => {
    return this.client.get<IRandomFactAPI>("https://numbersapi.com/"+NumberWanted+"?json")
  }

  GetDailyFact = (day:string, month: string) => {
    return this.client.get<IRandomFactAPI>("http://numbersapi.com/"+ month + "/" + day + "/date?json")
  }

  GetRandomFact = () => {
    return this.client.get<IRandomFactAPI>("https://numbersapi.com/random?json")
  }
}

export interface IRandomFactAPI{
  text: string;
  found: boolean;
  number: Number;
  type: string;
}