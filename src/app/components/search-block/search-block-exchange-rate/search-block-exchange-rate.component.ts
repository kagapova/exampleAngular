import {Component, Input, OnInit} from '@angular/core';
import {AnalyticsService} from '../../../services/analytics/analytics.service';
import {Bancor} from '../../../models/bancor';
import {CalcResult} from '../../../models/calc-result';

@Component({
    selector: 'app-search-block-exchange-rate',
    templateUrl: './search-block-exchange-rate.component.html',
    styleUrls: ['./search-block-exchange-rate.component.scss']
})
export class SearchBlockExchangeRateComponent implements OnInit {
    @Input() bancor: Bancor;
    @Input() calc: CalcResult;

    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
        this.analytics.view('search-block-exchange-rate');
    }

    onBuy() {
        BancorConvertWidget.showConvertPopup('buy', this.bancor.ETH, this.bancor.id);
        this.analytics.click('search-block-exchange-rate', 'buy');
    }

    onSell() {
        BancorConvertWidget.showConvertPopup('sell', this.bancor.id, this.bancor.ETH);
        this.analytics.click('search-block-exchange-rate', 'sell');
    }

    get convertedAmount(): number {
        return this.calc.rate * this.calc.amount;
    }
}
