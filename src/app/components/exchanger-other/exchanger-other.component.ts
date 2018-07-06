import { Component, Input, OnInit } from '@angular/core';
import {Exchange} from '@app/models/exchange';
import {AnalyticsService} from '@app/services/analytics/analytics.service';

@Component({
    selector: 'app-exchanger-other',
    templateUrl: './exchanger-other.component.html',
    styleUrls: ['./exchanger-other.component.scss']
})
export class ExchangerOtherComponent implements OnInit {
    @Input() exchanger: Exchange;

    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
    }

    onClick() {
        this.analytics.click('exchanger-other', this.exchanger.name);
    }
}
