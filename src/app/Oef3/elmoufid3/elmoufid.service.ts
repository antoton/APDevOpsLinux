import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElmoufidService {

  private usdPrice: number;
  private eurPrice: number;
  private gpbPrice: number;

  constructor(private http: HttpClient) { }

  private GetData() {
    return this.http.get<ICoin>(`https://api.coindesk.com/v1/bpi/currentprice.json`);
  }

  private updatePrice() {
    this.GetData().subscribe((result) => {

      this.usdPrice = result.bpi.USD.rate_float;
      this.eurPrice = result.bpi.EUR.rate_float;
      this.gpbPrice = result.bpi.GBP.rate_float
    })
  }

  GetBTCPrice(valuta: string): number {

    this.updatePrice();

    if (valuta == "EURO") {
      return this.eurPrice;
    }

    if (valuta == "DOLLAR") {
      return this.usdPrice;
    }

    if (valuta == "POND") {
      return this.gpbPrice;
    }


    return 6500; // Als api mislukt
  }

}



export interface ICoin {
  bpi: Ibpi;
}
export interface Ibpi {
  USD: Iusd;
  GBP: Igbp;
  EUR: Ieur;
}
export interface Iusd {
  code: string,
  symbol: string,
  rate: string,
  description: string,
  rate_float: number
}
export interface Igbp {
  code: string,
  symbol: string,
  rate: string,
  description: string,
  rate_float: number
}
export interface Ieur {
  code: string,
  symbol: string,
  rate: string,
  description: string,
  rate_float: number
}