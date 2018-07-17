import {Injectable} from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {retry} from 'rxjs/operators/retry';
import {Observable} from 'rxjs/Observable';
import {SearchResult, SearchResults} from '@app/models/search-result';
import {Event} from '@app/models/event';
import {Subject} from 'rxjs/Subject';
import {parseAddressResult} from './categories/address';
import {parseWebResult} from './categories/web';
import {parseCurrencyResult} from './categories/currency';
import {parseTransaction} from './categories/transaction';
import {parseCompany} from './categories/company';
import {parseEvent} from './categories/event';
import {parseWallet} from './categories/wallet';
import {parseNews} from './categories/news';
import {Wallet} from '@app/models/wallet';
import {WebResult} from '@app/models/web-result';
import {parseBancor} from './categories/bancor';
import {parseExchange} from './categories/exchange';
import {parseCalcResult} from './categories/calc-result';
import {Exchange} from '@app/models/exchange';
import {News} from '@app/models/news';

// environment
import { environment } from '@env/environment';

@Injectable()
export class SearchService {
    // @todo: Fix urls
    private readonly url = `${environment.apiURL}/api/search/v2`;

    // private url = '/api/search/v2';
    private searchTerm = new Subject<string>();
    private currentSearchTerm = '';
    private searchResults = new Subject<SearchResults>();

    constructor(private http: HttpClient,
                private route: ActivatedRoute) {

        this.route.queryParams.subscribe(params => {
            if ('q' in params) {
                const term = params['q'].trim();
                this.currentSearchTerm = term;

                this.searchTerm.next(term);
                this.search(term);
            }
        });
    }

    getSearchTerm(): Subject<string> {
        return this.searchTerm;
    }

    getCurrentSearchTerm(): string {
        return this.currentSearchTerm;
    }

    getSearchResults(): Observable<SearchResults> {
        return this.searchResults;
    }

    search(term: string) {
        this.searchResults.next(null);

        const apiURL = `${this.url}?request=${term}`;

        this.http.get(apiURL, {observe: 'response'})
            .pipe(retry(3))
            .subscribe((resp: HttpResponse<any[]>) => {
                const searchResults = this.parseResults(resp.body);
                this.searchResults.next(searchResults);
            });
    }

    clean() {
        this.searchTerm.next('');
        this.searchResults.next(null);
    }

    private parseResults(results: any[]): SearchResults {
        const searchResults: SearchResults = {
            type: '',
            data: {
                address: null,
                bancor: null,
                calc: null,
                company: null,
                currency: null,
                events: [],
                exchange: null,
                news: [],
                otherExchanges: [],
                txn: null,
                wallet: null,
                wallets: [],
                web: [],
            }
        };

        for (const result of results) {
            const searchResult = this.parseResult(result);
            if (searchResult !== null) {
                if (searchResult instanceof WebResult) {
                    searchResults.data[result.type].push(searchResult);

                } else if (searchResult instanceof Event) {
                    searchResults.data['events'].push(searchResult);

                } else if (searchResult instanceof Wallet) {
                    searchResults.data['wallets'].push(searchResult);

                } else if (searchResult instanceof Exchange) {
                    if (!searchResults.data['exchange']) {
                        searchResults.data['exchange'] = searchResult;
                    } else {
                        searchResults.data['otherExchanges'].push(searchResult);
                    }

                } else if (searchResult instanceof News) {
                    searchResults.data['news'].push(searchResult);

                } else {
                    searchResults.data[result.type] = searchResult;
                }
            }
        }

        if (searchResults.data.currency !== null) {
            searchResults.type = 'currency';

        } else if (searchResults.data.company !== null) {
            searchResults.type = 'company';

        } else if (searchResults.data.address !== null) {
            searchResults.type = 'address';

        } else if (searchResults.data.txn !== null) {
            searchResults.type = 'txn';

        } else if (searchResults.data.exchange !== null) {
            searchResults.type = 'exchange';

        } else if (searchResults.data.wallets.length > 0) {
            searchResults.type = 'wallet';
            searchResults.data['wallet'] = searchResults.data['wallets'][0];

        } else {
            searchResults.type = 'web';

        }

        return searchResults;
    }

    private parseResult(result: any): SearchResult {
        const parsers = {
            address: parseAddressResult,
            bancor: parseBancor,
            calc: parseCalcResult,
            company: parseCompany,
            currency: parseCurrencyResult,
            event: parseEvent,
            exchange: parseExchange,
            news: parseNews,
            txn: parseTransaction,
            wallet: parseWallet,
            web: parseWebResult,
        };

        if (!parsers.hasOwnProperty(result.type)) {
            return null;
        }

        const parser = parsers[result.type];
        return parser(result);
    }
}
