import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '@app/models/transaction';
import {SearchResults} from '@app/models/search-result';

@Component({
    selector: 'app-transaction',
    templateUrl: './transaction.component.html',
    styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
    @Input() result: SearchResults;
    transaction: Transaction;

    constructor() {
    }

    ngOnInit() {
        this.transaction = this.result.data.txn;
    }
}
