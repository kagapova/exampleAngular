import { Component, Input, OnInit } from '@angular/core';
import {Exchange} from '../../../models/exchange';
import {AnalyticsService} from '../../../services/analytics/analytics.service';

@Component({
    selector: 'app-search-block-token-exchange',
    templateUrl: './search-block-token-exchange.component.html',
    styleUrls: ['./search-block-token-exchange.component.scss']
})
export class SearchBlockTokenExchangeComponent implements OnInit {
    @Input() exchange: Exchange;

    constructor(private analytics: AnalyticsService) { }

    ngOnInit() {
    }

    onClick() {
        this.analytics.click('search-block-token-exchange', this.exchange.name);
    }
}
