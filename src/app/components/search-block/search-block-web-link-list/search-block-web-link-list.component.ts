import {Component, Input, OnInit} from '@angular/core';
import {WebResult} from '../../../models/web-result';
import {AnalyticsService} from '../../../services/analytics/analytics.service';

@Component({
    selector: 'app-search-block-web-link-list',
    templateUrl: './search-block-web-link-list.component.html',
    styleUrls: ['./search-block-web-link-list.component.scss']
})
export class SearchBlockWebLinkListComponent implements OnInit {
    @Input() webLinks: WebResult[];

    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
        this.analytics.view('search-block-web-link');
    }
}
