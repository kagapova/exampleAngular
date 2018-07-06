import {Component, Input, OnInit} from '@angular/core';
import {Address} from '@app/models/address';
import {SearchResults} from '@app/models/search-result';
import {WebResult} from '@app/models/web-result';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
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
