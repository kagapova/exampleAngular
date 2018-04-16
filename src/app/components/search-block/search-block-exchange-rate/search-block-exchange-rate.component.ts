import {Component, Input, OnInit} from '@angular/core';
import {AnalyticsService} from '../../../services/analytics/analytics.service';
import {CalcResult} from '../../../models/calc-result';

@Component({
    selector: 'app-search-block-exchange-rate',
    templateUrl: './search-block-exchange-rate.component.html',
    styleUrls: ['./search-block-exchange-rate.component.scss']
})
export class SearchBlockExchangeRateComponent implements OnInit {
    @Input() calc: CalcResult;

    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
        this.analytics.view('search-block-exchange-rate');
    }

    get convertedAmount(): number {
        return this.calc.rate * this.calc.amount;
    }

}
