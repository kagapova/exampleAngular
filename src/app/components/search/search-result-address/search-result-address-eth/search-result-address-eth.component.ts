import {Component, Input, OnInit} from '@angular/core';
import {EthAddress} from '../../../../models/address';

@Component({
    selector: 'app-search-result-address-eth',
    templateUrl: './search-result-address-eth.component.html',
    styleUrls: ['./search-result-address-eth.component.scss']
})
export class SearchResultAddressEthComponent implements OnInit {
    @Input() result: EthAddress;

    constructor() {
    }

    ngOnInit() {
    }
}
