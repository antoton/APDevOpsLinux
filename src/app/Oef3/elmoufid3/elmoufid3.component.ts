import { Component, OnInit } from '@angular/core';
import { ElmoufidService } from './elmoufid.service';

@Component({
  selector: 'app-elmoufid3',
  templateUrl: './elmoufid3.component.html',
  styleUrls: ['./elmoufid3.component.css']
})
export class Elmoufid3Component implements OnInit {

  Balance: number;
  CurrentPrice: number;

  Trades: Trade[] = [];
  NumberOfTrades: number;
  FloatingPL: number;
  Equity: number;

  RequiredBalance: number;
  service: ElmoufidService;

  public title1: string;
  public title2: string;

  constructor(private MoService: ElmoufidService) {

    this.title1 = "(Amir Abrar)";
    this.title2 = "(Arafa Yonacalik)";

    this.service = MoService;
    this.Balance = 100000;
    this.FloatingPL = 0;
    this.Equity = 0;
    this.RequiredBalance = 0;

    this.UpdatePrice();
    this.CalculatePL();
    this.CalculateFLoatingPL();
    this.UpdateEquity();

    setInterval(() => {
      this.UpdatePrice();
      this.CalculatePL();
      this.CalculateFLoatingPL();
      this.UpdateEquity();
    }, 10000);


    this.UpdatePrice();
    this.CalculatePL();
    this.CalculateFLoatingPL();
    this.UpdateEquity();

  }

  UpdatePrice() {

    this.CurrentPrice = this.service.GetBTCPrice("EURO");

  }

  PlaceTrade(btcAmount: number): void {
    if (this.CurrentPrice != null) {
      if (btcAmount > 0 && btcAmount != null) {
        this.RequiredBalance = this.CurrentPrice * btcAmount;
        if (this.CanPlaceTrade(this.RequiredBalance)) {
          this.AddTrade(new Trade(this.CurrentPrice, btcAmount));
          this.UpdateBalance(btcAmount);
        }
        else {
          alert("Balance Is To Small");
        }
      }
      else {
        alert("No BTC Amount Selected");
      }
    }
  }

  CanPlaceTrade(requiredBalance: number): boolean {
    if (this.Balance >= requiredBalance) {
      return true;
    }
    else {
      return false;
    }
  }

  AddTrade(trade: Trade): void {
    this.NumberOfTrades = this.Trades.length;
    this.Trades[this.NumberOfTrades] = trade;
  }

  UpdateBalance(btcAmount: number): void {
    this.Balance -= (btcAmount * this.CurrentPrice);
  }

  UpdateEquity(): void {
    this.Equity = this.Balance + this.FloatingPL;
  }

  CalculatePL(): void {
    this.Trades.forEach(Trade => {
      Trade.Profit = (this.CurrentPrice - Trade.EntryPoint) * Trade.Amount;
    });
  }

  CalculateFLoatingPL(): void {
    this.FloatingPL = 0; // Reset
    this.Trades.forEach(trade => {
      this.FloatingPL += trade.Profit
    });
  }


  ngOnInit() {
    this.UpdatePrice();
  }

}

class Trade {

  constructor(entryPoint: number, amount: number) {
    this.EntryPoint = entryPoint;
    this.Profit = 0;
    this.Amount = amount;
  }

  public Profit: number;
  public EntryPoint: number;
  public Amount: number;
}
