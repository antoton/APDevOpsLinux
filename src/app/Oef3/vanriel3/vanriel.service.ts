import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//api call https://opentdb.com/api.php?amount=1 waarbij amount bepaald hoeveel vragen er gegenereerd worden

@Injectable({
  providedIn: 'root'
})

export class VanRielService {

  constructor(private client: HttpClient) { }

  GetQuestionFromAPI(){
    return this.client.get<IResult>("https://opentdb.com/api.php?amount=1")
  }
}
export interface IResult{
  results: IQuestion;
}

export interface IQuestion{
  0: ITheQuestion;
}

export interface ITheQuestion{
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
