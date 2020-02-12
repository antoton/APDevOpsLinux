import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaesService {

  constructor(private http: HttpClient) { }

  searchGames(query: string){
    return this.http.get<IResults>(`https://api.rawg.io/api/games?search=${query}`)

  }
}

export interface IResults{
    results: IGame[];
}

export interface IGame{
  name: string;
  released: string;
  background_image: string;
  rating: number;
  id: number;
}
