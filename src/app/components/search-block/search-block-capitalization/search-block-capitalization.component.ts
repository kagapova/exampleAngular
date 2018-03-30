import {Component, Input, OnInit} from '@angular/core';
import {CurrencyCapitalization} from '../../../models/currency';
import {AnalyticsService} from '../../../services/analytics/analytics.service';

@Component({
    selector: 'app-search-block-capitalization',
    templateUrl: './search-block-capitalization.component.html',
    styleUrls: ['./search-block-capitalization.component.scss']
})
export class SearchBlockCapitalizationComponent implements OnInit {
    @Input() capitalization: CurrencyCapitalization;
    @Input() symbol: string;

    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
        this.analytics.view('search-block-capitalization');
    }
}
