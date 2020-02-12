import { Component, OnInit, Input } from '@angular/core';
import { VanopstalService } from '../../vanopstal3/vanopstal.service';

@Component({
  selector: 'app-uenk-child',
  templateUrl: './uenk-child.component.html',
  styleUrls: ['./uenk-child.component.css']
})
export class UenkChildComponent implements OnInit {

  @Input() fromValue: number;

  bitcoinRate: string;
  bitcoinCanBuy: number;


  constructor(private BitcoinService: VanopstalService) { 
    
    this.BitcoinService.GetData().subscribe((result) => {
      this.bitcoinRate = result.bpi.EUR.rate

      this.bitcoinCanBuy = this.fromValue / parseFloat(this.bitcoinRate.replace(',',''));;
    })
  
}

  ngOnInit() {
    if (this.bitcoinRate != null)
      this.bitcoinCanBuy = this.fromValue / parseFloat(this.bitcoinRate.replace(',',''));;
  }

}

