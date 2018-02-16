import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../../../models/transaction';

@Component({
    selector: 'app-search-result-transaction',
    templateUrl: './search-result-transaction.component.html',
    styleUrls: ['./search-result-transaction.component.scss']
})
export class SearchResultTransactionComponent implements OnInit {
    @Input() result: Transaction;

    constructor() {
    }

    ngOnInit() {
    }
}
