import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from '../../../../services/analytics/analytics.service';

@Component({
    selector: 'app-search-block-web-link-list-more-button',
    templateUrl: './search-block-web-link-list-more-button.component.html',
    styleUrls: ['./search-block-web-link-list-more-button.component.scss']
})
export class SearchBlockWebLinkListMoreButtonComponent implements OnInit {
    isClicked = false;

    constructor(private analytics: AnalyticsService) {
        this.onClick = this.onClick.bind(this);
    }

    ngOnInit() {
        this.analytics.view('search-block-web-link-more-button');
    }

    onClick() {
        if (!this.isClicked) {
            this.isClicked = true;
            this.analytics.click('search-block-web-link-more-button');
        }
    }
}
