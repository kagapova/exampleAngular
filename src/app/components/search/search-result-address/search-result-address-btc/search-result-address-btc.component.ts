import {Component, Input, OnInit} from '@angular/core';
import {BtcAddress} from '../../../../models/address';

@Component({
    selector: 'app-search-result-address-btc',
    templateUrl: './search-result-address-btc.component.html',
    styleUrls: ['./search-result-address-btc.component.scss']
})
export class SearchResultAddressBtcComponent implements OnInit {
    @Input() result: BtcAddress;

    constructor() {
    }

    ngOnInit() {
    }
}
