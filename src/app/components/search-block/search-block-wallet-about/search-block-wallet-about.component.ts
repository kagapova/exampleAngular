import { Component, Input, OnInit } from '@angular/core';
import {Wallet} from '../../../models/wallet';
import {AnalyticsService} from '../../../services/analytics/analytics.service';


@Component({
    selector: 'app-search-block-wallet-about',
    templateUrl: './search-block-wallet-about.component.html',
    styleUrls: ['./search-block-wallet-about.component.scss']
})
export class SearchBlockWalletAboutComponent implements OnInit {
    @Input() wallet: Wallet;

    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
        this.analytics.view('search-block-wallet-about');
    }

    onCoinClick() {
        this.analytics.click('search-block-wallet-about', 'coin')
    }
}
