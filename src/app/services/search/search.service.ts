import {Injectable} from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {SearchResult, SearchResults} from '../../models/search-result';
import {Event} from '../../models/event';
import {Subject} from 'rxjs/Subject';
import {parseAddressResult} from './categories/address';
import {parseWebResult} from './categories/web';
import {parseCurrencyResult} from './categories/currency';
import {parseTransaction} from './categories/transaction';
import {parseCompany} from './categories/company';
import {parseEvent} from './categories/event';
import {parseWallet} from './categories/wallet';
import {parseNews} from './categories/news';
import {Wallet} from '../../models/wallet';
import {WebResult} from '../../models/web-result';
import {News} from '../../models/news';
import {parseCalcResult} from './categories/calc-result';


@Injectable()
export class SearchService {
    private url = '/api/search/v2';
    private searchTerm = new Subject<string>();
    private currentSearchTerm = '';
    private searchResults = new Subject<SearchResults>();

    constructor(private http: HttpClient,
                private route: ActivatedRoute) {

        this.route.queryParams.subscribe(params => {
            if ('q' in params) {
                let term = params['q'].trim();
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

        let apiURL = `${this.url}?request=${term}`;

        this.http.get(apiURL, {observe: 'response'})
            .pipe(
                retry(3)
            )
            .subscribe((resp: HttpResponse<any[]>) => {
                let searchResults = this.parseResults(resp.body);
                this.searchResults.next(searchResults);
            });
    }

    clean() {
        this.searchTerm.next('');
        this.searchResults.next(null);
    }

    private parseResults(results: any[]): SearchResults {
        let searchResults: SearchResults = {
            type: '',
            data: {
                address: null,
                company: null,
                currency: null,
                txn: null,
                web: [],
                events: [],
                wallets: [],
                news: [],
                calc: null,
            }
        };

        for (let result of results) {
            let searchResult = this.parseResult(result);
            if (searchResult !== null) {
                if (searchResult instanceof WebResult) {
                    searchResults.data[result.type].push(searchResult);

                } else if (searchResult instanceof Event) {
                    searchResults.data['events'].push(searchResult);

                } else if (searchResult instanceof Wallet) {
                    searchResults.data['wallets'].push(searchResult);

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

        } else {
            searchResults.type = 'web';
        }

        return searchResults;
    }

    private parseResult(result: any): SearchResult {
        switch (result.type) {
            case 'web':
                return parseWebResult(result);

            case 'currency':
                return parseCurrencyResult(result);

            case 'address':
                return parseAddressResult(result);

            case 'txn':
                return parseTransaction(result);

            case 'company':
                return parseCompany(result);

            case 'event':
                return parseEvent(result);

            case 'wallet':
                return parseWallet(result);

            case 'news':
                return parseNews(result);

            case 'calc':
                return parseCalcResult(result);

            default:
                // todo write to sentry
                return null;
        }
    }
}
