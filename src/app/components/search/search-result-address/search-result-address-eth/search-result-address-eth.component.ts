import {Component, Input, OnInit} from '@angular/core';
import {EthAddressResult} from '../../../../models/address-result';

@Component({
    selector: 'app-search-result-address-eth',
    templateUrl: './search-result-address-eth.component.html',
    styleUrls: ['./search-result-address-eth.component.scss']
})
export class SearchResultAddressEthComponent implements OnInit {
    @Input() result: EthAddressResult;

    constructor() {
    }

    ngOnInit() {
    }
}
