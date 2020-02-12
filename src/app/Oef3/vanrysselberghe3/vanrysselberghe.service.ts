import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VanrysselbergheService {

  constructor(private _http:HttpClient) { }

  RocketList(rocket){
    return this._http.get<Rockets>(`http://launchlibrary.net/1.3/rocket/${rocket}`)
  }

  DateList(startDate,endDate){
    return this._http.get<Launches>(`http://launchlibrary.net/1.3/launch/${startDate}/${endDate}`)
  }

  DateListSingle(startDate){
    return this._http.get<Launches>(`http://launchlibrary.net/1.3/launch/${startDate}`)
  }
}

export interface Family {
  id: number;
  name: string;
  agencies: string;
}

export interface Rocket{
  id: number;
  name: string;
  configuration: string;
  defaultPads: string;
  family: Family;
  infoURL: string;
  wikiURL: string;
  infoURLs: string[];
  imageSizes: number[];
  imageURL: string;
}

export interface Rockets {
  rockets: Rocket[];
  total: number;
  count: number;
  offset: number;
}

export interface Agency {
  id: number;
  name: string;
  abbrev: string;
  countryCode: string;
  type: number;
  infoURL: string;
  wikiURL: string;
  infoURLs: string[];
}

export interface Pad {
  id: number;
  name: string;
  infoURL: string;
  wikiURL: string;
  mapURL: string;
  latitude: number;
  longitude: number;
  agencies: Agency[];
}

export interface Location {
  pads: Pad[];
  id: number;
  name: string;
  infoURL: string;
  wikiURL: string;
  countryCode: string;
}

export interface Agency2 {
  id: number;
  name: string;
  abbrev: string;
  countryCode: string;
  type: number;
  infoURL: string;
  wikiURL: string;
  infoURLs: string[];
}

export interface Rocket {
  id: number;
  name: string;
  configuration: string;
  familyname: string;
  agencies: Agency2[];
  wikiURL: string;
  infoURLs: string[];
  infoURL: string;
  imageSizes: number[];
  imageURL: string;
}

export interface Agency3 {
  id: number;
  name: string;
  abbrev: string;
  countryCode: string;
  type: number;
  infoURL: string;
  wikiURL: string;
  infoURLs: string[];
}

export interface Mission {
  id: number;
  name: string;
  description: string;
  type: number;
  typeName: string;
  agencies: Agency3[];
}

export interface Lsp {
  id: number;
  name: string;
  abbrev: string;
  countryCode: string;
  type: number;
  infoURL: string;
  wikiURL: string;
  infoURLs: string[];
}

export interface Launch {
  id: number;
  name: string;
  windowstart: string;
  windowend: string;
  net: string;
  wsstamp: number;
  westamp: number;
  netstamp: number;
  isostart: string;
  isoend: string;
  isonet: string;
  status: number;
  inhold: number;
  tbdtime: number;
  vidURLs: string[];
  vidURL: string;
  infoURLs: any[];
  infoURL?: any;
  holdreason?: any;
  failreason?: any;
  tbddate: number;
  probability: number;
  hashtag?: any;
  location: Location;
  rocket: Rocket;
  missions: Mission[];
  lsp: Lsp;
}

export interface Launches {
  launches: Launch[];
  total: number;
  offset: number;
  count: number;
}
