import 'd3';
import 'nvd3';

import * as Raven from 'raven-js';
import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SearchComponent} from './components/search/search.component';
import {HomeComponent} from './components/home/home.component';
import {SearchFormComponent} from './components/search-form/search-form.component';
import {AppRoutingModule} from './app-routing.module';
import {SearchService} from './services/search.service';
import {SearchResultListComponent} from './components/search/search-result-list/search-result-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SearchResultLinkComponent} from './components/search/search-result-link/search-result-link.component';
import {SearchResultTokenComponent} from './components/search/search-result-token/search-result-token.component';
import {NvD3Module} from 'ng2-nvd3';
import {environment} from '../environments/environment';
import {HomeAboutComponent} from './components/home/home-about/home-about.component';
import {BlocksComponent} from './components/blocks/blocks.component';
import {BlocksBlockchainComponent} from './components/blocks/blocks-blockchain/blocks-blockchain.component';
import {SearchHeaderComponent} from './components/search/search-header/search-header.component';
import {BlocksTxnEthereumComponent} from './components/blocks/blocks-txn-ethereum/blocks-txn-ethereum.component';
import {SearchResultAddressComponent} from './components/search/search-result-address/search-result-address.component';
import {SearchResultAddressEthComponent} from './components/search/search-result-address/search-result-address-eth/search-result-address-eth.component';
import {SearchResultAddressBtcComponent} from './components/search/search-result-address/search-result-address-btc/search-result-address-btc.component';
import {SearchResultTransactionComponent} from './components/search/search-result-transaction/search-result-transaction.component';
import {SearchResultTransactionEthComponent} from './components/search/search-result-transaction/search-result-transaction-eth/search-result-transaction-eth.component';
import {SearchResultTransactionBtcComponent} from './components/search/search-result-transaction/search-result-transaction-btc/search-result-transaction-btc.component';
import {SearchResultTransactionLtcComponent} from './components/search/search-result-transaction/search-result-transaction-ltc/search-result-transaction-ltc.component';
import {FollowComponent} from './components/follow/follow.component';
import {AbsPipe} from './pipes/abs/abs.pipe';
import {AddToBookmarksComponent} from './components/add-to-bookmarks/add-to-bookmarks.component';
import {ExchangeRatesService} from './services/exchange-rates.service';
import {HomeExchangeRatesComponent} from './components/home/home-exchange-rates/home-exchange-rates.component';
import {SearchResultCompanyComponent} from './components/search/search-result-company/search-result-company.component';
import {FaviconPipe} from './pipes/favicon/favicon.pipe';
import {SearchBlockComponent} from './components/search-block/search-block.component';
import {SearchBlockExchangeRateComponent} from './components/search-block/search-block-exchange-rate/search-block-exchange-rate.component';
import {SearchBlockCapitalizationComponent} from './components/search-block/search-block-capitalization/search-block-capitalization.component';
import {SearchBlockChartRateComponent} from './components/search-block/search-block-chart-rate/search-block-chart-rate.component';
import {SearchBlockCompanyAboutComponent} from './components/search-block/search-block-company-about/search-block-company-about.component';
import {SearchBlockWebLinkComponent} from './components/search-block/search-block-web-link/search-block-web-link.component';
import {SearchBlockWebLinkListComponent} from './components/search-block/search-block-web-link-list/search-block-web-link-list.component';
import {SearchBlockRoadmapComponent} from './components/search-block/search-block-roadmap/search-block-roadmap.component';
import {SearchBlockTeamComponent} from './components/search-block/search-block-team/search-block-team.component';
import {FooterComponent} from './components/footer/footer.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SearchBlockEventComponent} from './components/search-block/search-block-event/search-block-event.component';
import {SearchBlockEventListComponent} from './components/search-block/search-block-event-list/search-block-event-list.component';
import {SearchBlockWalletComponent} from './components/search-block/search-block-wallet/search-block-wallet.component';
import {SearchBlockWalletListComponent} from './components/search-block/search-block-wallet-list/search-block-wallet-list.component';
import { SearchAddContentButtonComponent } from './components/search/search-add-content-button/search-add-content-button.component';

Raven
    .config(environment.ravenDSN)
    .install();

export class RavenErrorHandler implements ErrorHandler {
    handleError(err: any): void {
        console.error(err);
        Raven.captureException(err);
    }
}

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        HomeComponent,
        SearchFormComponent,
        SearchResultListComponent,
        SearchResultLinkComponent,
        SearchResultTokenComponent,
        HomeAboutComponent,
        BlocksComponent,
        BlocksBlockchainComponent,
        SearchHeaderComponent,
        BlocksTxnEthereumComponent,
        SearchResultAddressComponent,
        SearchResultAddressEthComponent,
        SearchResultAddressBtcComponent,
        SearchResultTransactionComponent,
        SearchResultTransactionEthComponent,
        SearchResultTransactionBtcComponent,
        SearchResultTransactionLtcComponent,
        FollowComponent,
        AbsPipe,
        AddToBookmarksComponent,
        HomeExchangeRatesComponent,
        SearchResultCompanyComponent,
        FaviconPipe,
        SearchBlockComponent,
        SearchBlockExchangeRateComponent,
        SearchBlockCapitalizationComponent,
        SearchBlockChartRateComponent,
        SearchBlockCompanyAboutComponent,
        SearchBlockWebLinkComponent,
        SearchBlockWebLinkListComponent,
        SearchBlockRoadmapComponent,
        SearchBlockTeamComponent,
        FooterComponent,
        SearchBlockEventComponent,
        SearchBlockEventListComponent,
        SearchBlockWalletComponent,
        SearchBlockWalletListComponent,
        SearchAddContentButtonComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NvD3Module,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
    ],
    providers: [
        ExchangeRatesService,
        SearchService,
        {provide: ErrorHandler, useClass: RavenErrorHandler},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
