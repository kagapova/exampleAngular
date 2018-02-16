import {Component, Input, OnInit} from '@angular/core';
import {EthTransaction} from '../../../../models/transaction';

@Component({
    selector: 'app-search-result-transaction-eth',
    templateUrl: './search-result-transaction-eth.component.html',
    styleUrls: ['./search-result-transaction-eth.component.scss']
})
export class SearchResultTransactionEthComponent implements OnInit {
    @Input() result: EthTransaction;

    constructor() {
    }

    ngOnInit() {
    }
}
