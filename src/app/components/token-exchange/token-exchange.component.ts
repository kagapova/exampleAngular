import { Component, Input, OnInit } from '@angular/core';
import {Exchange} from '@app/models/exchange';
import {AnalyticsService} from '@app/services/analytics/analytics.service';

@Component({
    selector: 'app-token-exchange',
    templateUrl: './token-exchange.component.html',
    styleUrls: ['./token-exchange.component.scss']
})
export class TokenExchangeComponent implements OnInit {
    @Input() exchange: Exchange;

    constructor(private analytics: AnalyticsService) { }

    ngOnInit() {
    }

    onClick() {
        this.analytics.click('token-exchange', this.exchange.name);
    }
}
