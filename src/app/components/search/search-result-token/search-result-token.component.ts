import { Component, Input, OnInit } from '@angular/core';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Bancor } from '@app/models/bancor';
import { CalcResult } from '@app/models/calc-result';
import { Company } from '@app/models/company';
import { Currency } from '@app/models/currency';
import { Event } from '@app/models/event';
import { Exchange } from '@app/models/exchange';
import { News } from '@app/models/news';
import { SearchResults } from '@app/models/search-result';
import { Wallet } from '@app/models/wallet';
import { WebResult } from '@app/models/web-result';
import { AuthService } from '@app/services/auth/auth.service';

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
    exchanges: Exchange[];
    isAuthenticated = false;
    isFollowed?: boolean = null;
    bookmarkId?: number = null;
    constructor(private auth: AuthService) {
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
        this.exchanges = [];

        if (this.result.data.exchange) {
            this.exchanges.push(this.result.data.exchange);
            this.result.data.otherExchanges.forEach(exchange => {
                this.exchanges.push(exchange);
            });
        }

        if (!this.calc) {
            const from = this.currency.symbol;
            const to = 'USD';
            const amount = 1;
            const rate = this.currency.price;

            this.calc = new CalcResult(from, to, amount, rate);
        }

        if (this.auth.isAuthenticated) {
            this.isAuthenticated = true;
            this.bookmarkId = this.currency.bookmarkId;
            this.isFollowed = this.currency.bookmarkId != null;
        }
    }
}
