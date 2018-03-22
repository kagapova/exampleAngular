import {Component, Input, OnInit} from '@angular/core';
import {AnalyticsService} from '../../services/analytics/analytics.service';

@Component({
    selector: 'app-track-link',
    templateUrl: './track-link.component.html',
    styleUrls: ['./track-link.component.scss']
})
export class TrackLinkComponent implements OnInit {
    @Input() public originalLink: string;
    @Input() public serverTrackLink: string;
    @Input() public block: string;

    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
    }

    onClick() {
        this.analytics.clickToLink(this.block, this.serverTrackLink);
    }
}
