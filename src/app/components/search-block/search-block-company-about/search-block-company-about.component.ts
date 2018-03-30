import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../../../models/company';
import {AnalyticsService} from '../../../services/analytics/analytics.service';

@Component({
    selector: 'app-search-block-company-about',
    templateUrl: './search-block-company-about.component.html',
    styleUrls: ['./search-block-company-about.component.scss']
})
export class SearchBlockCompanyAboutComponent implements OnInit {
    @Input() company: Company;

    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
        this.analytics.view('search-block-company-about');
    }
}
