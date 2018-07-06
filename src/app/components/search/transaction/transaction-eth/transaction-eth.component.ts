import {Component, Input, OnInit} from '@angular/core';
import {EthTransaction} from '@app/models/transaction';

@Component({
    selector: 'app-transaction-eth',
    templateUrl: './transaction-eth.component.html',
    styleUrls: ['./transaction-eth.component.scss']
})
export class TransactionEthComponent implements OnInit {
    @Input() result: EthTransaction;

    constructor() {
    }

    ngOnInit() {
    }
}
