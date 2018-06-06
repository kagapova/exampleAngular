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
import {SearchService} from './services/search/search.service';
import {SearchResultListComponent} from './components/search/search-result-list/search-result-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SearchResultLinkComponent} from './components/search/search-result-link/search-result-link.component';
import {SearchResultTokenComponent} from './components/search/search-result-token/search-result-token.component';
import {NvD3Module} from 'ng2-nvd3';
import {environment} from '../environments/environment';
import {HomeAboutComponent} from './components/home/home-about/home-about.component';
import {SearchHeaderComponent} from './components/search/search-header/search-header.component';
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
import {ExchangeRatesService} from './services/exchange-rates/exchange-rates.service';
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
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SearchBlockFutureEventComponent} from './components/search-block/search-block-future-event/search-block-future-event.component';
import {SearchBlockFutureEventListComponent} from './components/search-block/search-block-future-event-list/search-block-future-event-list.component';
import {SearchBlockWalletComponent} from './components/search-block/search-block-wallet/search-block-wallet.component';
import {SearchBlockWalletListComponent} from './components/search-block/search-block-wallet-list/search-block-wallet-list.component';
import {SearchAddContentButtonComponent} from './components/search/search-add-content-button/search-add-content-button.component';
import {TrackLinkComponent} from './components/track-link/track-link.component';
import {AnalyticsService} from './services/analytics/analytics.service';
import {HomePopularCoinListComponent} from './components/home/home-popular-coin-list/home-popular-coin-list.component';
import {LoadComponent} from './components/load/load.component';
import {ProducthuntComponent} from './components/producthunt/producthunt.component';
import {HomeTrendingSearcheListComponent} from './components/home/home-trending-searche-list/home-trending-searche-list.component';
import {TrendingSearchesService} from './services/trending-searches/trending-searches.service';
import {SuggestService} from './services/suggest/suggest.service';
import {Ng2CompleterModule} from 'ng2-completer';
import {SearchResultExchangeComponent} from './components/search/search-result-exchange/search-result-exchange.component';
import {SearchBlockExchangeAboutComponent} from './components/search-block/search-block-exchange-about/search-block-exchange-about.component';
import {SearchBlockExchangeCurrentRateListComponent} from './components/search-block/search-block-exchange-current-rate-list/search-block-exchange-current-rate-list.component';
import {SearchBlockExchangerOtherListComponent} from './components/search-block/search-block-exchanger-other-list/search-block-exchanger-other-list.component';
import {SearchBlockExchangerOtherComponent} from './components/search-block/search-block-exchanger-other/search-block-exchanger-other.component';
import {LogoComponent} from './components/logo/logo.component';
import {SearchResultWalletComponent} from './components/search/search-result-wallet/search-result-wallet.component';
import {SearchBlockWalletAboutComponent} from './components/search-block/search-block-wallet-about/search-block-wallet-about.component';
import {HomeLatestNewsComponent} from './components/home/home-latest-news/home-latest-news.component';
import {LatestNewsService} from './services/latest-news/latest-news.service';
import {SearchBlockNewsComponent} from './components/search-block/search-block-news/search-block-news.component';
import {SearchBlockNewsListComponent} from './components/search-block/search-block-news-list/search-block-news-list.component';
import {HomeTopIcoListComponent} from './components/home/home-top-ico-list/home-top-ico-list.component';
import {TopICOsService} from './services/top-icos/top-icos.service';
import {SearchBlockWebLinkListMoreButtonComponent} from './components/search-block/search-block-web-link-list/search-block-web-link-list-more-button/search-block-web-link-list-more-button.component';
import {SearchFormPopularComponent} from './components/search-form/search-form-popular/search-form-popular.component';
import { SearchBlockTokenExchangesListComponent } from './components/search-block/search-block-token-exchanges-list/search-block-token-exchanges-list.component';
import { SearchBlockTokenExchangeComponent } from './components/search-block/search-block-token-exchange/search-block-token-exchange.component';

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
    return new TranslateHttpLoader(http, '/api/translations/v1/', '');
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
        SearchHeaderComponent,
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
        SearchBlockFutureEventComponent,
        SearchBlockFutureEventListComponent,
        SearchBlockWalletComponent,
        SearchBlockWalletListComponent,
        SearchAddContentButtonComponent,
        TrackLinkComponent,
        HomePopularCoinListComponent,
        LoadComponent,
        ProducthuntComponent,
        HomeTrendingSearcheListComponent,
        SearchResultExchangeComponent,
        SearchBlockExchangeAboutComponent,
        SearchBlockExchangeCurrentRateListComponent,
        SearchBlockExchangerOtherListComponent,
        SearchBlockExchangerOtherComponent,
        SearchResultWalletComponent,
        SearchBlockWalletAboutComponent,
        HomeLatestNewsComponent,
        SearchBlockNewsComponent,
        SearchBlockNewsListComponent,
        HomeTopIcoListComponent,
        LogoComponent,
        SearchBlockWebLinkListMoreButtonComponent,
        SearchFormPopularComponent,
        SearchBlockTokenExchangesListComponent,
        SearchBlockTokenExchangeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NvD3Module,
        Ng2CompleterModule,
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
        AnalyticsService,
        TrendingSearchesService,
        SuggestService,
        LatestNewsService,
        TopICOsService,
        {provide: ErrorHandler, useClass: RavenErrorHandler},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
