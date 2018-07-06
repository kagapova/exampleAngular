import {Component, Input, OnInit} from '@angular/core';
import {BtcTransaction} from '@app/models/transaction';

@Component({
    selector: 'app-transaction-btc',
    templateUrl: './transaction-btc.component.html',
    styleUrls: ['./transaction-btc.component.scss']
})
export class TransactionBtcComponent implements OnInit {
    @Input() result: BtcTransaction;

    constructor() {
    }

    ngOnInit() {
    }
}
