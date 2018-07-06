import {Component, Input, OnInit} from '@angular/core';
import {LtcTransaction} from '@app/models/transaction';

@Component({
    selector: 'app-transaction-ltc',
    templateUrl: './transaction-ltc.component.html',
    styleUrls: ['./transaction-ltc.component.scss']
})
export class TransactionLtcComponent implements OnInit {
    @Input() result: LtcTransaction;

    constructor() {
    }

    ngOnInit() {
    }
}
