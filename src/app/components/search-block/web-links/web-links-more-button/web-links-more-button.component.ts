import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from '@app/services/analytics/analytics.service';

@Component({
    selector: 'app-web-links-more-button',
    templateUrl: './web-links-more-button.component.html',
    styleUrls: ['./web-links-more-button.component.scss']
})
export class WebLinksMoreButtonComponent implements OnInit {
    isClicked = false;

    constructor(private analytics: AnalyticsService) {
        this.onClick = this.onClick.bind(this);
    }

    ngOnInit() {
        this.analytics.view('web-links-more-button');
    }

    onClick() {
        if (!this.isClicked) {
            this.isClicked = true;
            this.analytics.click('web-links-more-button');
        }
    }
}
