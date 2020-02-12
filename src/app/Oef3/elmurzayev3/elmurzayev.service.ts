import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ElmurzayevService {

  constructor(private _http:HttpClient) { }

  get dogImages(): Observable<IDog[]>{
    return this._http.get<IDog[]>("https://random.dog/woof.json");
  }
  get catImages(): Observable<ICat[]>{
    return this._http.get<ICat[]>("https://aws.random.cat/meow");
  }

  
}

export interface IDog {
  fileSizeBytes: number;
  url: string;
}

export interface ICat {
  fileSizeBytes: number;
  url: string;
}


