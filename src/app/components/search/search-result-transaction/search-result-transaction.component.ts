import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../../../models/transaction';
import {SearchResults} from '../../../models/search-result';

@Component({
    selector: 'app-search-result-transaction',
    templateUrl: './search-result-transaction.component.html',
    styleUrls: ['./search-result-transaction.component.scss']
})
export class SearchResultTransactionComponent implements OnInit {
    @Input() result: SearchResults;
    transaction: Transaction;

    constructor() {
    }

    ngOnInit() {
        this.transaction = this.result.data.txn;
    }
}
