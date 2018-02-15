import {Component, Input, OnInit} from '@angular/core';
import {BtcAddressResult} from '../../../../models/address-result';

@Component({
    selector: 'app-search-result-address-btc',
    templateUrl: './search-result-address-btc.component.html',
    styleUrls: ['./search-result-address-btc.component.scss']
})
export class SearchResultAddressBtcComponent implements OnInit {
    @Input() result: BtcAddressResult;

    constructor() {
    }

    ngOnInit() {
    }
}
