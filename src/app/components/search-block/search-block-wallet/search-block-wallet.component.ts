import {Component, Input, OnInit} from '@angular/core';
import {Wallet} from '../../../models/wallet';

@Component({
    selector: 'app-search-block-wallet',
    templateUrl: './search-block-wallet.component.html',
    styleUrls: ['./search-block-wallet.component.scss']
})
export class SearchBlockWalletComponent implements OnInit {
    @Input() wallet: Wallet;

    constructor() {
    }

    ngOnInit() {
    }
}
