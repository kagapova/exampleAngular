import {Component, Input, OnInit} from '@angular/core';
import {BtcAddress} from '@app/models/address';

@Component({
    selector: 'app-address-btc',
    templateUrl: './address-btc.component.html',
    styleUrls: ['./address-btc.component.scss']
})
export class AddressBtcComponent implements OnInit {
    @Input() result: BtcAddress;

    constructor() {
    }

    ngOnInit() {
    }
}
