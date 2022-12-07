import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyRatesTableComponent } from './currency-rates-table.component';

describe('CurrencyRatesTableComponent', () => {
  let component: CurrencyRatesTableComponent;
  let fixture: ComponentFixture<CurrencyRatesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyRatesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyRatesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
