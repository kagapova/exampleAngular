import {Component, Input, OnInit} from '@angular/core';
import {SearchResults} from '../../../models/search-result';
import {WebResult} from '../../../models/web-result';
import {Exchange} from '../../../models/exchange';

@Component({
    selector: 'app-search-result-exchange',
    templateUrl: './search-result-exchange.component.html',
    styleUrls: ['./search-result-exchange.component.scss']
})
export class SearchResultExchangeComponent implements OnInit {
    @Input() result: SearchResults;
    exchange: Exchange;
    otherExchanges: Exchange[];
    webLinks: WebResult[];

    constructor() {
    }

    ngOnInit() {
        this.exchange = this.result.data.exchange;
        this.webLinks = this.result.data.web;
        this.otherExchanges = this.result.data.otherExchanges;
    }
}
