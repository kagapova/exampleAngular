import {Component, Input, OnInit} from '@angular/core';
import {LtcTransaction} from '../../../../models/transaction';

@Component({
    selector: 'app-search-result-transaction-ltc',
    templateUrl: './search-result-transaction-ltc.component.html',
    styleUrls: ['./search-result-transaction-ltc.component.scss']
})
export class SearchResultTransactionLtcComponent implements OnInit {
    @Input() result: LtcTransaction;

    constructor() {
    }

    ngOnInit() {
    }
}
