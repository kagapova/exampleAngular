import {Component, Input, OnInit} from '@angular/core';
import {AnalyticsService} from '../../../services/analytics/analytics.service';

@Component({
    selector: 'app-search-block-exchange-rate',
    templateUrl: './search-block-exchange-rate.component.html',
    styleUrls: ['./search-block-exchange-rate.component.scss']
})
export class SearchBlockExchangeRateComponent implements OnInit {
    @Input() symbol: string;
    @Input() price: number;

    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
        this.analytics.view('search-block-exchange-rate');
    }

}
