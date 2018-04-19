import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {News} from '../../../models/news';
import {LatestNewsService} from '../../../services/latest-news/latest-news.service';
import {AnalyticsService} from '../../../services/analytics/analytics.service';

@Component({
    selector: 'app-home-latest-news',
    templateUrl: './home-latest-news.component.html',
    styleUrls: ['./home-latest-news.component.scss']
})
export class HomeLatestNewsComponent implements OnInit {
    readonly latestNews$: Observable<News[]>;

    constructor(private latestNews: LatestNewsService,
                private analytics: AnalyticsService) {
        this.latestNews$ = latestNews.getNews();
    }

    ngOnInit() {
        setTimeout(() => {
            this.latestNews.updateNews();
        }, 1);

        this.analytics.view('home-latest-news');
    }

    onClick(number: number, news: News) {
        if (news !== null) {
            this.analytics.clickToOutgoingLink('home-latest-news', news.analyticalURL, number.toString());
        }
    }
}
