import {Component, Input, OnInit} from '@angular/core';
import {SearchResults} from '../../../models/search-result';
import {Currency} from '../../../models/currency';
import {Company} from '../../../models/company';
import {WebResult} from '../../../models/web-result';

@Component({
    selector: 'app-search-result-token',
    templateUrl: './search-result-token.component.html',
    styleUrls: ['./search-result-token.component.scss']
})
export class SearchResultTokenComponent implements OnInit {
    @Input() result: SearchResults;
    currency: Currency;
    company: Company;
    webLinks: WebResult[];

    constructor() {
    }

    public ngOnInit() {
        this.currency = this.result.data.currency;
        this.company = this.result.data.company;
        this.webLinks = this.result.data.web;
    }
}
