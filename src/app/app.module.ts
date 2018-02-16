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
import {SearchResultItemComponent} from './components/search/search-result-item/search-result-item.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SearchResultLinkComponent} from './components/search/search-result-link/search-result-link.component';
import {SearchResultTokenComponent} from './components/search/search-result-token/search-result-token.component';
import {NvD3Module} from 'ng2-nvd3';
import {environment} from '../environments/environment';
import { HomeAboutComponent } from './components/home/home-about/home-about.component';
import { BlocksComponent } from './components/blocks/blocks.component';
import { BlocksBlockchainComponent } from './components/blocks/blocks-blockchain/blocks-blockchain.component';
import { SearchHeaderComponent } from './components/search/search-header/search-header.component';
import { BlocksTxnEthereumComponent } from './components/blocks/blocks-txn-ethereum/blocks-txn-ethereum.component';
import { SearchResultAddressComponent } from './components/search/search-result-address/search-result-address.component';
import { SearchResultAddressEthComponent } from './components/search/search-result-address/search-result-address-eth/search-result-address-eth.component';
import { SearchResultAddressBtcComponent } from './components/search/search-result-address/search-result-address-btc/search-result-address-btc.component';
import { SearchResultTransactionComponent } from './components/search/search-result-transaction/search-result-transaction.component';
import { SearchResultTransactionEthComponent } from './components/search/search-result-transaction/search-result-transaction-eth/search-result-transaction-eth.component';
import { SearchResultTransactionBtcComponent } from './components/search/search-result-transaction/search-result-transaction-btc/search-result-transaction-btc.component';

Raven
    .config(environment.ravenDSN)
    .install();

export class RavenErrorHandler implements ErrorHandler {
    handleError(err: any): void {
        console.error(err);
        Raven.captureException(err);
    }
}

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        HomeComponent,
        SearchFormComponent,
        SearchResultListComponent,
        SearchResultItemComponent,
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
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NvD3Module,
    ],
    providers: [
        SearchService,
        {provide: ErrorHandler, useClass: RavenErrorHandler},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
