import {Component, Input, OnInit} from '@angular/core';
import {CompanyMember} from '@app/models/company';
import {AnalyticsService} from '@app/services/analytics/analytics.service';

@Component({
    selector: 'app-search-block-team',
    templateUrl: './search-block-team.component.html',
    styleUrls: ['./search-block-team.component.scss']
})
export class SearchBlockTeamComponent implements OnInit {
    @Input() team: CompanyMember[];
    @Input() sourceUrl: string;
    showedMembers: CompanyMember[];
    showedAllTeam: boolean;

    constructor(private analytics: AnalyticsService) {}

    ngOnInit() {
        if (this.team.length > 2) {
            this.showedMembers = this.team.slice(0, 2);
            this.showedAllTeam = false;
        }

        this.analytics.view('search-block-team');
    }

    showAllTeam() {
        this.showedMembers = this.team;
        this.showedAllTeam = true;
        this.analytics.click('search-block-team', 'show-all');
    }
}
