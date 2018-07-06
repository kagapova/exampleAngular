import {Component, Input, OnInit} from '@angular/core';
import {Company} from '@app/models/company';
import {AnalyticsService} from '@app/services/analytics/analytics.service';

@Component({
    selector: 'app-search-block-company-about',
    templateUrl: './search-block-company-about.component.html',
    styleUrls: ['./search-block-company-about.component.scss']
})
export class SearchBlockCompanyAboutComponent implements OnInit {
    @Input() company: Company;
    isDescriptionExpanded = false;

    public get hardCap() {
        return this.company.slug === 'bitclave' ? '$25.5 Million' : '-';
    }

    public get raisedFunds() {
        return this.company.slug === 'bitclave' ? '$25.5 Million' : '-';
    }

    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
        this.analytics.view('search-block-company-about');
    }

    expandDescription() {
        this.isDescriptionExpanded = !this.isDescriptionExpanded;
    }
}
