import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from '@app/services/analytics/analytics.service';

@Component({
    selector: 'app-popular-searches',
    templateUrl: './popular-searches.component.html',
    styleUrls: ['./popular-searches.component.scss']
})
export class PopularSearchesComponent implements OnInit {

    nameRef = 'popular-searches';

    constructor(private analytics: AnalyticsService) {}

    ngOnInit() {
        this.analytics.view(this.nameRef);
    }

    onClick(type: string) {
        this.analytics.click(this.nameRef, type);
    }
}
