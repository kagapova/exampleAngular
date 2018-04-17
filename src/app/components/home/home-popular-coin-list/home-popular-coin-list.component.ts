import {Component, OnInit} from '@angular/core';
import {ExchangeRate} from '../../../models/exchange-rates';
import {Observable} from 'rxjs/Observable';
import {ExchangeRatesService} from '../../../services/exchange-rates/exchange-rates.service';
import {AnalyticsService} from '../../../services/analytics/analytics.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home-popular-coin-list',
    templateUrl: './home-popular-coin-list.component.html',
    styleUrls: ['./home-popular-coin-list.component.scss']
})
export class HomePopularCoinListComponent implements OnInit {
    exchangeRatesResults$: Observable<ExchangeRate[]>;

    constructor(private exchangeRatesService: ExchangeRatesService,
                private analytics: AnalyticsService,
                private router: Router) {
        this.exchangeRatesResults$ = this.exchangeRatesService.getExchangeRateResults();
    }

    ngOnInit() {
        setTimeout(() => {
            this.exchangeRatesService.getRates([
                'BTC', 'ETH', 'XRP', 'BCH', 'LTC', 'ADA', 'NEO', 'XLM', 'EOS', 'XMR']);
        }, 1);

        this.analytics.view('home-popular-coin-list');
    }

    onClick(number: number, name: string) {
        this.router.navigate(['/search'], {queryParams: {q: name}});
        this.analytics.click('home-popular-coin-list', number.toString());
    }
}
