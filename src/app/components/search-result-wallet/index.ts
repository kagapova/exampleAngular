import { Component, Input, OnInit } from '@angular/core';
import {SearchResults} from '@app/models/search-result';
import {WebResult} from '@app/models/web-result';
import {Wallet} from '@app/models/wallet';

@Component({
    selector: 'app-search-result-wallet',
    templateUrl: './search-result-wallet.html',
    styleUrls: ['./search-result-wallet.scss']
})
export class SearchResultWalletComponent implements OnInit {
    @Input() result: SearchResults;

    webLinks: WebResult[];
    wallet: Wallet;
    isAuthenticated = false;
    isFollowed?: boolean = null;

    constructor() { }

    ngOnInit() {
        this.wallet = this.result.data.wallet;
        this.webLinks = this.result.data.web;
    }

}
