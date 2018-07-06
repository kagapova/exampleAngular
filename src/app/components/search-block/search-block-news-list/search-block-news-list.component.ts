import { Component, Input, OnInit } from '@angular/core';
import {News} from '@app/models/news';
import {AnalyticsService} from '@app/services/analytics/analytics.service';

@Component({
    selector: 'app-search-block-news-list',
    templateUrl: './search-block-news-list.component.html',
    styleUrls: ['./search-block-news-list.component.scss']
})
export class SearchBlockNewsListComponent implements OnInit {
    @Input()
    newsList: News[];

    readonly MAX_NEWS = 3;

    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
        this.analytics.view('search-block-news-list');
    }
}
