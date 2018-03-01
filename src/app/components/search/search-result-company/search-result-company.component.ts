import {Component, Input, OnInit} from '@angular/core';
import {Company, CompanyMember} from '../../../models/company';

@Component({
    selector: 'app-search-result-company',
    templateUrl: './search-result-company.component.html',
    styleUrls: ['./search-result-company.component.scss']
})
export class SearchResultCompanyComponent implements OnInit {
    @Input() result: Company;
    showedMembers: CompanyMember[];
    showedAllTeam: boolean;

    constructor() {
    }

    ngOnInit() {
        if (this.result.team.length > 7) {
            this.showedMembers = this.result.team.slice(0, 5);
            this.showedAllTeam = false;
        }
    }

    showAllTeam() {
        this.showedMembers = this.result.team;
        this.showedAllTeam = true;
    }
}
