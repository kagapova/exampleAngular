import {Component, Input, OnInit} from '@angular/core';
import {Address} from '../../../models/address';
import {SearchResults} from '../../../models/search-result';
import {WebResult} from '../../../models/web-result';

@Component({
    selector: 'app-search-result-address',
    templateUrl: './search-result-address.component.html',
    styleUrls: ['./search-result-address.component.scss']
})
export class SearchResultAddressComponent implements OnInit {
    @Input() result: SearchResults;
    address: Address;
    webLinks: WebResult[];

    constructor() {
    }

    ngOnInit() {
        this.address = this.result.data.address;
        this.webLinks = this.result.data.web;
    }
}
