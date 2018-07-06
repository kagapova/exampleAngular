import {Component, Input} from '@angular/core';
import {AnalyticsService} from '@app/services/analytics/analytics.service';

@Component({
    selector: 'app-track-link',
    templateUrl: './track-link.component.html',
    styleUrls: ['./track-link.component.scss']
})
export class TrackLinkComponent {
    @Input() public originalLink: string;
    @Input() public serverTrackLink: string;
    @Input() public block: string;
    @Input() public label: string;

    constructor(private analytics: AnalyticsService) {}

    onClick() {
        this.analytics.clickToOutgoingLink(this.block, this.serverTrackLink, this.label);
    }
}
