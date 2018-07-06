import {Component, Input, OnInit} from '@angular/core';
import {WebResult} from '@app/models/web-result';
import {AnalyticsService} from '@app/services/analytics/analytics.service';

@Component({
    selector: 'app-web-links',
    templateUrl: './web-links.component.html',
    styleUrls: ['./web-links.component.scss']
})
export class WebLinksComponent implements OnInit {
    @Input() webLinks: WebResult[];

    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
        this.analytics.view('web-links');
    }
}
