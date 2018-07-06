import 'd3';
import 'nvd3';
import * as Raven from 'raven-js';
import {
    HTTP_INTERCEPTORS,
    HttpClient,
    HttpClientModule
} from '@angular/common/http';
import {AbsPipe} from './pipes/abs/abs.pipe';
import {AddressBtcComponent} from './components/address/address-btc/address-btc.component';
import {AnalyticsService} from './services/analytics/analytics.service';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthInterceptor} from './interceptors/auth/auth.interceptor';
import {AuthService} from './services/auth/auth.service';
import {BaseAuthComponent} from './components/base-auth/base-auth.component';
import {BaseWidgetService} from './services/base/base-widget.service';
import {BrowserModule} from '@angular/platform-browser';
import {CardComponent} from './components/card/card';
import {CompanyBookmarksService} from './services/company-bookmarks/company-bookmarks.service';
import {environment} from '@env/environment';
import {ErrorHandler, NgModule} from '@angular/core';
import {ExchangeAboutComponent} from './components/exchange-about/exchange-about.component';
import {ExchangeCurrentRateListComponent} from './components/exchange-current-rate-list/exchange-current-rate-list.component';
import {ExchangeRateComponent} from './components/exchange-rate/exchange-rate';
import {ExchangeRateService} from './services/exchange-rate/exchange-rate.service';
import {ExchangerOtherComponent} from './components/exchanger-other/exchanger-other.component';
import {PopularSearchesService} from './services/popular-searches/popular-searches.service';
import {ExchangerOtherListComponent} from './components/exchanger-other-list/exchanger-other-list.component';
import {FaviconPipe} from './pipes/favicon/favicon.pipe';
import {FooterComponent} from './components/footer/footer.component';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './components/home/';
import {LatestNewsService} from './services/latest-news/latest-news.service';
import {LayoutComponent} from './components/layout/';
import {LoaderComponent} from './components/loader/';
import {LogoComponent} from './components/logo/logo.component';
import {Ng2CompleterModule} from 'ng2-completer';
import {NvD3Module} from 'ng2-nvd3';
import {PopularSearchesComponent} from './components/popular-searches/popular-searches.component';
import {RatingsComponent} from './components/ratings/ratings.component';
import {SearchComponent} from './components/search/';
import {SearchAddContentButtonComponent} from './components/search/search-add-content-button/search-add-content-button.component';
import {SearchBlockCompanyAboutComponent} from './components/search-block/search-block-company-about/search-block-company-about.component';
import {SearchBlockCompanyComponent} from './components/search-block/search-block-company/search-block-company.component';
import {SearchBlockComponent} from './components/search-block/search-block.component';
import {SearchBlockNewsComponent} from './components/search-block/search-block-news/search-block-news.component';
import {SearchBlockNewsListComponent} from './components/search-block/search-block-news-list/search-block-news-list.component';
import {SearchBlockOfferComponent} from './components/search-block/search-block-offer/search-block-offer.component';
import {RoadmapComponent} from './components/roadmap/roadmap.component';
import {SearchBlockTeamComponent} from './components/search-block/search-block-team/search-block-team.component';
import {SearchCapComponent} from './components/search-block/search-cap/search-cap.component';
import {SearchFormComponent} from './components/search-form/search-form.component';
import {SearchHeaderComponent} from './components/search/search-header/search-header.component';
import {AddressComponent} from './components/address/address.component';
import {AddressEthComponent} from './components/address/address-eth/address-eth.component';
import {SearchResultCompanyComponent} from './components/search/search-result-company/search-result-company.component';
import {SearchResultExchangeComponent} from './components/search/search-result-exchange/search-result-exchange.component';
import {SearchResultLinkComponent} from './components/search/search-result-link/search-result-link.component';
import {SearchResultsChartComponent} from './components/search-block/search-results-chart/search-results-chart.component';
import {SearchResultsComponent} from './components/search/search-results/search-results.component';
import {SearchResultsHeaderComponent} from './components/search-results-header/search-results-header.component';
import {SearchResultTokenComponent} from './components/search/search-result-token/search-result-token.component';
import {SearchResultWalletComponent} from './components/search-result-wallet/';
import {SearchService} from './services/search/search.service';
import {SuggestService} from './services/suggest/suggest.service';
import {TokenBookmarksService} from './services/token-bookmarks/token-bookmarks.service';
import {TokenExchangeComponent} from './components/token-exchange/token-exchange.component';
import {TokenExchangesListComponent} from './components/token-exchanges-list/token-exchanges-list.component';
import {TopICOsService} from './services/top-icos/top-icos.service';
import {TrackLinkComponent} from './components/track-link/track-link.component';
import {TransactionBtcComponent} from './components/search/transaction/transaction-btc/transaction-btc.component';
import {TransactionComponent} from './components/search/transaction/transaction.component';
import {TransactionEthComponent} from './components/search/transaction/transaction-eth/transaction-eth.component';
import {TransactionLtcComponent} from './components/search/transaction/transaction-ltc/transaction-ltc.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TrendingSearchesService} from './services/trending-searches/trending-searches.service';
import {UserAccountComponent} from './components/user-account/user-account';
import {UsersService} from './services/users/users.service';
import {WalletAboutComponent} from './components/wallet-about/';
import {WalletComponent} from './components/wallet/';
import {WalletListComponent} from './components/wallet-list/wallet-list.component';
import {WebLinkComponent} from './components/search-block/web-link/web-link.component';
import {WebLinksComponent} from './components/search-block/web-links/web-links.component';
import {WebLinksMoreButtonComponent} from './components/search-block/web-links/web-links-more-button/web-links-more-button.component';
import {WidgetDirective} from './directives/widget.directive';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

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
        AbsPipe,
        AppComponent,
        BaseAuthComponent,
        FaviconPipe,
        FooterComponent,
        HomeComponent,
        LoaderComponent,
        LogoComponent,
        RatingsComponent,
        SearchAddContentButtonComponent,
        SearchCapComponent,
        SearchResultsChartComponent,
        SearchBlockCompanyAboutComponent,
        SearchBlockCompanyComponent,
        SearchBlockComponent,
        ExchangeAboutComponent,
        ExchangeCurrentRateListComponent,
        ExchangeRateComponent,
        ExchangerOtherComponent,
        ExchangerOtherListComponent,
        SearchBlockNewsComponent,
        SearchBlockNewsListComponent,
        SearchBlockOfferComponent,
        RoadmapComponent,
        SearchBlockTeamComponent,
        TokenExchangeComponent,
        TokenExchangesListComponent,
        WalletComponent,
        WalletAboutComponent,
        WalletListComponent,
        SearchResultWalletComponent,
        WebLinkComponent,
        WebLinksComponent,
        WebLinksMoreButtonComponent,
        SearchComponent,
        SearchFormComponent,
        PopularSearchesComponent,
        SearchHeaderComponent,
        AddressBtcComponent,
        AddressComponent,
        AddressEthComponent,
        SearchResultCompanyComponent,
        SearchResultExchangeComponent,
        SearchResultLinkComponent,
        SearchResultsComponent,
        SearchResultsHeaderComponent,
        SearchResultTokenComponent,
        TransactionBtcComponent,
        TransactionComponent,
        TransactionEthComponent,
        TransactionLtcComponent,
        TrackLinkComponent,
        WidgetDirective,
        CardComponent,
        UserAccountComponent,
        LayoutComponent,
        SearchBarComponent,
    ],
    imports: [
        AngularFontAwesomeModule,
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
        AnalyticsService,
        AuthService,
        BaseWidgetService,
        CompanyBookmarksService,
        ExchangeRateService,
        LatestNewsService,
        PopularSearchesService,
        SearchService,
        SuggestService,
        TokenBookmarksService,
        TopICOsService,
        TrendingSearchesService,
        UsersService,
        {
            provide: ErrorHandler,
            useClass: RavenErrorHandler
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
