import { TestBed } from '@angular/core/testing';

import { FakeCurrencyRatesAPIService } from './fake-currency-rates-api.service';

describe('FakeCurrencyRatesAPIService', () => {
  let service: FakeCurrencyRatesAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeCurrencyRatesAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
