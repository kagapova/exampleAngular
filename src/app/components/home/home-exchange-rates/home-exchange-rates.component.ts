import {Component, OnInit} from '@angular/core';
import {ExchangeRatesService} from '../../../services/exchange-rates.service';
import {Observable} from 'rxjs/Observable';
import {ExchangeRate} from '../../../models/exchange-rates';

@Component({
    selector: 'app-home-exchange-rates',
    templateUrl: './home-exchange-rates.component.html',
    styleUrls: ['./home-exchange-rates.component.scss']
})
export class HomeExchangeRatesComponent implements OnInit {
    exchangeRatesResults$: Observable<ExchangeRate[]>;

    constructor(private exchangeRatesService: ExchangeRatesService) {
    }

    ngOnInit() {
        this.exchangeRatesResults$ = this.exchangeRatesService.getExchangeRateResults();
        this.exchangeRatesService.getRates([
            'BTC', 'ETH', 'XRP', 'BCH', 'LTC', 'ADA', 'NEO', 'XLM', 'EOS', 'XMR']);
    }
}
