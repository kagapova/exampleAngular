import {Component, OnInit} from '@angular/core';
import {ExchangeRate} from '../../../models/exchange-rates';
import {Observable} from 'rxjs/Observable';
import {ExchangeRatesService} from '../../../services/exchange-rates/exchange-rates.service';

@Component({
    selector: 'app-home-popular-coin-list',
    templateUrl: './home-popular-coin-list.component.html',
    styleUrls: ['./home-popular-coin-list.component.scss']
})
export class HomePopularCoinListComponent implements OnInit {
    exchangeRatesResults$: Observable<ExchangeRate[]>;

    constructor(private exchangeRatesService: ExchangeRatesService) {
        this.exchangeRatesResults$ = this.exchangeRatesService.getExchangeRateResults();
    }

    ngOnInit() {
        setTimeout(() => {
            this.exchangeRatesService.getRates([
                'BTC', 'ETH', 'XRP', 'BCH', 'LTC', 'ADA', 'NEO', 'XLM', 'EOS', 'XMR']);
        }, 1);
    }
}
