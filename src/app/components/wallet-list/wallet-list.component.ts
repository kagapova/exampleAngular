import {Component, Input, OnInit} from '@angular/core';
import {Wallet} from '@app/models/wallet';
import {AnalyticsService} from '@app/services/analytics/analytics.service';

@Component({
    selector: 'app-wallet-list',
    templateUrl: './wallet-list.component.html',
    styleUrls: ['./wallet-list.component.scss']
})
export class WalletListComponent implements OnInit {
    @Input() wallets: Wallet[];

    constructor(private analytics: AnalyticsService) {}

    ngOnInit() {
        if (this.wallets.length > 3) {
            this.wallets = this.wallets.slice(0, 3);
        }
        this.analytics.view('search-block-wallet');
    }
}
