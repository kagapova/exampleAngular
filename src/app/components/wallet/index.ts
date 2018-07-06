import {Component, Input, OnInit} from '@angular/core';
import {Wallet} from '@app/models/wallet';
import {AnalyticsService} from '@app/services/analytics/analytics.service';


@Component({
    selector: 'app-wallet',
    templateUrl: './wallet.html',
    styleUrls: ['./wallet.scss']
})
export class WalletComponent implements OnInit {
    @Input() wallet: Wallet;

    public get coins() {
        return this.wallet.coins.filter((item, index) => index < 8 );
     }

    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
        this.analytics.view('search-block-wallet');
    }
}
