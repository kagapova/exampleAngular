import {Component, Input, OnInit} from '@angular/core';
import {BtcTransaction} from '../../../../models/transaction';

@Component({
    selector: 'app-search-result-transaction-btc',
    templateUrl: './search-result-transaction-btc.component.html',
    styleUrls: ['./search-result-transaction-btc.component.scss']
})
export class SearchResultTransactionBtcComponent implements OnInit {
    @Input() result: BtcTransaction;

    constructor() {
    }

    ngOnInit() {
    }
}
