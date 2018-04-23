import { Component, Input, OnInit } from '@angular/core';
import {Exchange} from '../../../models/exchange';
import {AnalyticsService} from '../../../services/analytics/analytics.service';

@Component({
    selector: 'app-search-block-exchanger-other',
    templateUrl: './search-block-exchanger-other.component.html',
    styleUrls: ['./search-block-exchanger-other.component.scss']
})
export class SearchBlockExchangerOtherComponent implements OnInit {
    @Input() exchanger: Exchange;

    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
    }

    onClick() {
        this.analytics.click('search-block-exchanger-other', this.exchanger.name);
    }
}
