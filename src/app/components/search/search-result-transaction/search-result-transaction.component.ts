import {Component, Input, OnInit} from '@angular/core';
import {TransactionResult} from '../../../models/transaction-result';

@Component({
    selector: 'app-search-result-transaction',
    templateUrl: './search-result-transaction.component.html',
    styleUrls: ['./search-result-transaction.component.scss']
})
export class SearchResultTransactionComponent implements OnInit {
    @Input() result: TransactionResult;

    constructor() {
    }

    ngOnInit() {
    }
}
