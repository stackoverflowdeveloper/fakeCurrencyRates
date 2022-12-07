import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';
import { CurrencyRatesAPI, FakeCurrencyRatesAPIService } from '../services/fake-currency-rates-api.service';

@Component({
  selector: 'app-currency-rates-table',
  templateUrl: './currency-rates-table.component.html',
  styleUrls: ['./currency-rates-table.component.scss']
})
export class CurrencyRatesTableComponent implements OnInit {

public columns: Array<keyof CurrencyRatesAPI> = ["id","instrumentName", "bid", "ask"]
constructor(private currencyAPI: FakeCurrencyRatesAPIService){}

public currencies$: Observable<CurrencyRatesAPI[]> = this.currencyAPI.prices$
ngOnInit(): void {
this.currencyAPI.asyncCall();
// partial update:
this.currencyAPI.getLatestPrice();
}

}
