import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BernaertsService {

  constructor(private client: HttpClient) { }

  GetRandomFoxAPI():Observable<IFoto_API>{
    return this.client.get<IFoto_API>("https://randomfox.ca/floof/")
  }
}


export interface IFoto_API{
  image: string;
  link: string;
}