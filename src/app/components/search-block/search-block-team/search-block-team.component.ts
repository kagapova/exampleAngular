import {Component, Input, OnInit} from '@angular/core';
import {CompanyMember} from '../../../models/company';

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

    constructor() {
    }

    ngOnInit() {
        if (this.team.length > 5) {
            this.showedMembers = this.team.slice(0, 3);
            this.showedAllTeam = false;
        }
    }

    showAllTeam() {
        this.showedMembers = this.team;
        this.showedAllTeam = true;
    }
}
