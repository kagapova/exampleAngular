import {Component, Input, OnInit} from '@angular/core';
import {SearchResults} from '../../../models/search-result';
import {Currency} from '../../../models/currency';
import {Company} from '../../../models/company';
import {WebResult} from '../../../models/web-result';
import {Event} from '../../../models/event';
import {Wallet} from '../../../models/wallet';
import {Bancor} from '../../../models/bancor';
import {News} from '../../../models/news';
import {CalcResult} from '../../../models/calc-result';


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
    events: Event[];
    wallets: Wallet[];
    bancor: Bancor;
    newsList: News[];
    calc: CalcResult;

    constructor() {
    }

    public ngOnInit() {
        this.currency = this.result.data.currency;
        this.company = this.result.data.company;
        this.webLinks = this.result.data.web;
        this.events = this.result.data.events;
        this.wallets = this.result.data.wallets;
        this.bancor = this.result.data.bancor;
        this.newsList = this.result.data.news;
        this.calc = this.result.data.calc;

        if (!this.calc) {
            this.calc = new CalcResult(
                this.currency.symbol,
                'USD',
                1,
                this.currency.price
            );
        }
    }
}
