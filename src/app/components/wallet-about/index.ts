import { Component, Input, OnInit } from '@angular/core';
import {Wallet} from '@app/models/wallet';
import {AnalyticsService} from '@app/services/analytics/analytics.service';


@Component({
    selector: 'app-wallet-about',
    templateUrl: './wallet-about.html',
    styleUrls: ['./wallet-about.scss']
})
export class WalletAboutComponent implements OnInit {
    @Input() wallet: Wallet;

    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
        this.analytics.view('wallet-about');
    }

    onCoinClick() {
        this.analytics.click('wallet-about', 'coin');
    }
}
