import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClaesService {

  constructor(private http: HttpClient) { }
  //apiKey=be04ca13aacb4eabb8c3708a51367872
  GetData(input: string) {
    return this.http.get<IRecipe>("https://api.spoonacular.com/recipes/search?query=" + input + "&number=3&apiKey=be04ca13aacb4eabb8c3708a51367872");
  }
  GetSummary(id: string) {
    return this.http.get<ISummary>("https://api.spoonacular.com/recipes/" + id + "/summary?apiKey=be04ca13aacb4eabb8c3708a51367872");
  }
}
export interface Result {
  id: number;
  image: string;
  imageUrls: string[];
  readyInMinutes: number;
  servings: number;
  title: string;
}
export interface IRecipe {
  offset: number;
  number: number;
  results: Result[];
  totalResults: number;
}
export interface ISummary {
  id: number;
  summary: string;
  title: string;
}
