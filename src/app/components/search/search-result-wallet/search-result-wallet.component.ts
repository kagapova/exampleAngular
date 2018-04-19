import { Component, Input, OnInit } from '@angular/core';
import {SearchResults} from '../../../models/search-result';
import {WebResult} from '../../../models/web-result';
import {Wallet} from '../../../models/wallet';

@Component({
    selector: 'app-search-result-wallet',
    templateUrl: './search-result-wallet.component.html',
    styleUrls: ['./search-result-wallet.component.scss']
})
export class SearchResultWalletComponent implements OnInit {
    @Input() result: SearchResults;

    webLinks: WebResult[];
    wallet: Wallet;

    constructor() { }

    ngOnInit() {
        this.wallet = this.result.data.wallet;
        this.webLinks = this.result.data.web;
    }

}
