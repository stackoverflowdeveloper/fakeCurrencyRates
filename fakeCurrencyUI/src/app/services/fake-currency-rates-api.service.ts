import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

export interface CurrencyRatesAPI {
  id: number;
  instrumentName: string;
  bid: string;
  ask: string;
  timeStamp: string;
}

@Injectable({
  providedIn: 'root',
})
export class FakeCurrencyRatesAPIService {
  // constructor(private http: HttpClient) {}

  private fakeData: CurrencyRatesAPI[] = [
    {
      id: 1,
      instrumentName: 'EUR/USD',
      bid: '1.1000',
      ask: '1.2000',
      timeStamp: '01-06-2020 12:01:02:001',
    },
    {
      id: 2,
      instrumentName: 'EUR/JPY',
      bid: '119.60',
      ask: '119.90',
      timeStamp: '01-06-2020 12:01:02:001',
    },
    {
      id: 3,
      instrumentName: 'GBP/USD',
      bid: '1.2500',
      ask: '1.2560',
      timeStamp: '01-06-2020 12:01:02:001',
    },
    {
      id: 4,
      instrumentName: 'GBP/USD',
      bid: '1.2500',
      ask: '1.2560',
      timeStamp: '01-06-2020 12:01:02:100',
    },
  ];

  // don't have API, therefore create stream:
  private pricesSubject = new BehaviorSubject(this.fakeData);
  public prices$: Observable<CurrencyRatesAPI[]> = this.pricesSubject;

  getAllPrices() {
    // standard API CALL
    // return this.http.get(`${environment}/getAllPrices`);
  }

  getLatestPrice(instrument?: string) {
    // standard API CALL
    //  return this.http.get(`${environment}/getLatestPrice`, {instrument})
    // }
    // Let's assume we already have response:
    const LatestPriceDummyOutput: CurrencyRatesAPI[] = [
      {
        id: 1,
        instrumentName: 'EUR/USD',
        bid: '1.3333',
        ask: '1.34444',
        timeStamp: '01-06-2020 12:01:02:100',
      },
    ];
    let tempData = this.fakeData.map(
      (obj) => LatestPriceDummyOutput.find((elem) => elem.id === obj.id) || obj
    );
    console.log(tempData);
    // we can make partial update based on data above:
    this.pricesSubject.next(tempData);
  }
  asyncCall() {
    // This is simulation of real stream from API
    // we use it instead of creating real stream
    return setInterval(() => {
      this.generateFakeData();
      this.pricesSubject.next(this.fakeData);
    }, 3000);
  }

  generateFakeData(): any {
    this.fakeData.length = 4; // cleanup data except manually added
    for (let i = 0; i < 100; i++) {
      let bid = (Math.random() * 9).toString();

      this.fakeData.push({
        id: i + 4,
        instrumentName: this.fakeData[1].instrumentName,
        bid: bid,
        ask: (parseFloat(bid) + 0.5).toString(),
        timeStamp: this.fakeData[1].timeStamp,
      });
    }
    // console.log(this.fakeData);
    return this.fakeData;
  }
}
