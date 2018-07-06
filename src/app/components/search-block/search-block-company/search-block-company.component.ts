import {Component, Input, OnInit} from '@angular/core';
import {Company} from '@app/models/company';
import {AnalyticsService} from '@app/services/analytics/analytics.service';

@Component({
  selector: 'app-search-block-company',
  templateUrl: './search-block-company.component.html',
  styleUrls: ['./search-block-company.component.scss']
})
export class SearchBlockCompanyComponent implements OnInit {
    @Input() company: Company;
    isContentExpanded = true;

    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
        this.analytics.view('search-block-company');
    }

    expandContent() {
        this.isContentExpanded = !this.isContentExpanded;
    }
}
