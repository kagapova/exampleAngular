import {Component, Input, OnInit} from '@angular/core';
import {CurrencyCapitalization} from '@app/models/currency';
import {AnalyticsService} from '@app/services/analytics/analytics.service';

@Component({
    selector: 'app-search-cap',
    templateUrl: './search-cap.component.html',
    styleUrls: ['./search-cap.component.scss']
})
export class SearchCapComponent implements OnInit {
    @Input() capitalization: CurrencyCapitalization;
    @Input() symbol: string;

    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
        this.analytics.view('search-cap');
    }
}
