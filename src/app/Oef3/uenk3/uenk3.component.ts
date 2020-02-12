import { Component, OnInit } from '@angular/core';
import { UenkService, ICurrencies } from './uenk.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-uenk3',
  templateUrl: './uenk3.component.html',
  styleUrls: ['./uenk3.component.css']
})
export class Uenk3Component implements OnInit {

  currencyList: string[] = ["CAD","HKD","ISK","PHP","DKK","HUF","CZK","GBP","RON","SEK","IDR","INR","BRL","RUB","HRK","JPY","THB","CHF","EUR","MYR","BGN","TRY","CNY","NOK","NZD","ZAR","USD","MXN","SGD","AUD","ILS","KRW","PLN"];
  
  fromValue: number = 100;
  fromCurrency: string = "EUR";
  toCurrency: string = "USD";
  resultValue: string;
  lastChanged: string;

  constructor(private svc: UenkService) {
  }

  ngOnInit() {
    this.Convert()
  }

  set ChangeValue(value: number) {
    this.fromValue = value;
    this.Convert();
  }
  get ChangeValue() {
    return this.fromValue;
  }
  ChangeFromCurrency(index: number) {
    this.fromCurrency = this.currencyList[index];
    this.Convert();
  }
  ChangeToCurrency(index: number) {
    this.toCurrency = this.currencyList[index];
    this.Convert();
  }

  Convert() {
    this.svc.getData(this.fromCurrency).subscribe((result) => {
      
      this.fromCurrency = result.base
      this.lastChanged = result.date

      var rate: number;
      switch(this.toCurrency) { 
        case "CAD": { 
          rate = result.rates.CAD
           break; 
        } 
        case "HKD": { 
          rate = result.rates.HKD
           break; 
        } 
        case "ISK": { 
          rate = result.rates.ISK
           break; 
        } 
        case "PHP": { 
          rate = result.rates.PHP
           break; 
        } 
        case "DKK": { 
          rate = result.rates.DKK
           break; 
        } 
        case "HUF": { 
          rate = result.rates.HUF
           break; 
        } 
        case "GBP": { 
          rate = result.rates.GBP
           break; 
        } 
        case "RON": { 
          rate = result.rates.RON
           break; 
        } 
        case "SEK": { 
          rate = result.rates.SEK
           break; 
        } 
        case "IDR": { 
          rate = result.rates.IDR
           break; 
        } 
        case "INR": { 
          rate = result.rates.INR
           break; 
        } 
        case "BRL": { 
          rate = result.rates.BRL
           break; 
        } 
        case "RUB": { 
          rate = result.rates.RUB
           break; 
        } 
        case "HRK": { 
          rate = result.rates.HRK
           break; 
        } 
        case "JPY": { 
          rate = result.rates.JPY
           break; 
        } 
        case "THB": { 
          rate = result.rates.THB
           break; 
        } 
        case "CHF": { 
          rate = result.rates.CHF
           break; 
        } 
        case "EUR": {
          rate = result.rates.EUR
           break; 
        } 
        case "MYR": { 
          rate = result.rates.MYR
           break; 
        } 
        case "BGN": { 
          rate = result.rates.BGN
           break; 
        } 
        case "TRY": { 
          rate = result.rates.TRY
           break; 
        } 
        case "CNY": { 
          rate = result.rates.CNY
           break; 
        } 
        case "NOK": { 
          rate = result.rates.NOK
           break; 
        } 
        case "NZD": { 
          rate = result.rates.NZD
           break; 
        } 
        case "ZAR": { 
          rate = result.rates.ZAR
           break; 
        } 
        case "USD": { 
          rate = result.rates.USD
           break; 
        } 
        case "MXN": { 
          rate = result.rates.MXN
           break; 
        } 
        case "SGD": { 
          rate = result.rates.SGD
           break; 
        } 
        case "AUD": { 
          rate = result.rates.AUD
           break; 
        } 
        case "ILS": { 
          rate = result.rates.ILS
           break; 
        } 
        case "KRW": { 
          rate = result.rates.KRW
           break; 
        } 
        case "PLN": { 
          rate = result.rates.PLN
           break; 
        } 
        default: { 
          this.resultValue = "No input";
           break; 
        } 
      }
      this.resultValue = (this.fromValue * rate).toFixed(2);
    })
  }
}
