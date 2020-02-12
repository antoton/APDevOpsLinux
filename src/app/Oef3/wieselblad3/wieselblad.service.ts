import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class WieselbladService {

  constructor(private http : HttpClient) { }

  GetData()
  {
   return this.http.get<IJoke>(`http://api.icndb.com/jokes/random`);
  }

  GetPersonalData(voornaam: string, naam: string)
  {
    return this.http.get<IJoke>(`http://api.icndb.com/jokes/random?firstName=${voornaam}&lastName=${naam}`)
  }
}

export interface IJoke
{
  value: Value;
  type: string;
}

export interface Value
{
  id: number;
  joke: string;
}
