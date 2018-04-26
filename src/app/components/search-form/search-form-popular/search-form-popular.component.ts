import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from '../../../services/analytics/analytics.service';

@Component({
    selector: 'app-search-form-popular',
    templateUrl: './search-form-popular.component.html',
    styleUrls: ['./search-form-popular.component.scss']
})
export class SearchFormPopularComponent implements OnInit {
    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
        this.analytics.view('search-form-popular');
    }

    onClick(type: string) {
        this.analytics.click('search-form-popular', type);
    }
}
