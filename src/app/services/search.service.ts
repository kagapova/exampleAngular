import {Injectable} from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {SearchResult} from '../models/search-result';
import {Subject} from 'rxjs/Subject';
import {parseAddressResult} from './search/address';
import {parseWebResult} from './search/web';
import {parseCurrencyResult} from './search/currency';
import {parseTransactionResult} from './search/transaction';

@Injectable()
export class SearchService {
    private searchUrl = '/api/search/v2';
    private searchTerm = '';
    private searchResults = new Subject<SearchResult[]>();

    constructor(private http: HttpClient,
                private route: ActivatedRoute) {

        this.route.queryParams.subscribe(params => {
            if ('q' in params) {
                this.searchTerm = params['q'].trim();
                this.search(this.searchTerm, true);
            }
        });
    }

    getSearchTerm(): string {
        return this.searchTerm;
    }

    getSearchResults(): Observable<SearchResult[]> {
        return this.searchResults;
    }

    search(term: string, force = false) {
        term = term.trim();

        if (!term || (term === this.searchTerm && !force)) {
            return;
        }

        this.searchResults.next(null);

        let apiURL = `${this.searchUrl}?request=${term}&page=1&pagesize=20`;

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
        this.searchTerm = '';
        this.searchResults.next(null);
    }

    private parseResults(results: any[]): SearchResult[] {
        let searchResults = [];

        for (let result of results) {
            let searchResult = this.parseResult(result);
            if (searchResult !== null) {
                searchResults.push(searchResult);
            }
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
                return parseTransactionResult(result);

            default:
                // todo write to sentry
                return null;
        }
    }
}
