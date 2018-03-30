import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../models/event';
import {AnalyticsService} from '../../../services/analytics/analytics.service';

@Component({
    selector: 'app-search-block-future-event-list',
    templateUrl: './search-block-future-event-list.component.html',
    styleUrls: ['./search-block-future-event-list.component.scss']
})
export class SearchBlockFutureEventListComponent implements OnInit {
    @Input() events: Event[];

    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
        this.analytics.view('search-block-future-event');
    }
}
