import {Component, Input, OnInit} from '@angular/core';
import {Wallet} from '../../../models/wallet';
import {AnalyticsService} from '../../../services/analytics/analytics.service';

@Component({
    selector: 'app-search-block-wallet-list',
    templateUrl: './search-block-wallet-list.component.html',
    styleUrls: ['./search-block-wallet-list.component.scss']
})
export class SearchBlockWalletListComponent implements OnInit {
    @Input() wallets: Wallet[];
    showedWallets: Wallet[];
    showedAllWallets: boolean;

    constructor(private analytics: AnalyticsService) {
    }

    ngOnInit() {
        if (this.wallets.length > 5) {
            this.showedWallets= this.wallets.slice(0, 3);
            this.showedAllWallets = false;
        }

        this.analytics.view('search-block-wallet');
    }

    showAllWallets() {
        this.showedWallets = this.wallets;
        this.showedAllWallets = true;
        this.analytics.click('search-block-wallet', 'show-all');
    }
}
