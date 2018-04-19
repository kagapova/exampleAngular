import {Component, Input, OnInit} from '@angular/core';
import {Wallet} from '../../../models/wallet';
import {AnalyticsService} from '../../../services/analytics/analytics.service';


@Component({
    selector: 'app-search-block-wallet',
    templateUrl: './search-block-wallet.component.html',
    styleUrls: ['./search-block-wallet.component.scss']
})
export class SearchBlockWalletComponent implements OnInit {
    @Input() wallet: Wallet;
    @Input() number: number;

    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
        this.analytics.view('search-block-wallet');
    }
}
