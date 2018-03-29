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
    @Input() public label: string;

    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
    }

    onClick() {
        this.analytics.clickToOutgoingLink(this.block, this.serverTrackLink, this.label);
    }
}
