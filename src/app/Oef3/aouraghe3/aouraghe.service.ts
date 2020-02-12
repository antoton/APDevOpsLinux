import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AouragheService {

  constructor(private http: HttpClient) { }
 

  GetApiCall(Data : string)
  {
    return this.http.get<IRootObject>(`https://newsapi.org/v2/everything?q=${Data}&apiKey=1c81ec4b963045e18a9d0e01b5a1617b`)
  }
}

export interface ISource {
  id: string;
  name: string;
}

export interface IArticle {
  source: ISource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export interface IRootObject {
  status: string;
  totalResults: number;
  articles: IArticle[];
}
