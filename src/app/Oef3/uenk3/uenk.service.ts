import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UenkService {

  constructor(private http: HttpClient) { }

  getData(currency: string = "EUR") {
      return this.http.get<IExchangeInfo>(`https://api.exchangeratesapi.io/latest?base=${currency}`)
  }
}

export interface ICurrencies {
  CAD: number;
  HKD: number;
  ISK: number;
  PHP: number;
  DKK: number;
  HUF: number;
  CZK: number;
  GBP: number;
  RON: number;
  SEK: number;
  IDR: number;
  INR: number;
  BRL: number;
  RUB: number;
  HRK: number;
  JPY: number;
  THB: number;
  CHF: number;
  EUR: number;
  MYR: number;
  BGN: number;
  TRY: number;
  CNY: number;
  NOK: number;
  NZD: number;
  ZAR: number;
  USD: number;
  MXN: number;
  SGD: number;
  AUD: number;
  ILS: number;
  KRW: number;
  PLN: number;
}

export interface IExchangeInfo {
  rates: ICurrencies;
  base: string;
  date: string;
}