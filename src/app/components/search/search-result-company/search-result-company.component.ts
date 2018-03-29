import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../../../models/company';
import {SearchResults} from '../../../models/search-result';
import {Event} from '../../../models/event';
import {WebResult} from '../../../models/web-result';

@Component({
    selector: 'app-search-result-company',
    templateUrl: './search-result-company.component.html',
    styleUrls: ['./search-result-company.component.scss']
})
export class SearchResultCompanyComponent implements OnInit {
    @Input() result: SearchResults;
    company: Company;
    webLinks: WebResult[];
    events: Event[];

    constructor() {
    }

    ngOnInit() {
        this.company = this.result.data.company;
        this.webLinks = this.result.data.web;
        this.events = this.result.data.events;
    }
}
