import {Injectable} from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {SearchResult, LinkResult, TokenResult, AddressResult, AddressTokenResult} from '../models/search-result';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SearchService {
    private searchUrl = '/api/search/v1';
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
            case LinkResult.TYPE:
                return this.parseLinkResult(result);

            case TokenResult.TYPE:
                return this.parseTokenResult(result);

            case AddressResult.TYPE:
                return this.parseAddressResult(result);

            default:
                // todo write to sentry
                return null;
        }
    }

    private parseLinkResult(result: any): LinkResult {
        return new LinkResult(
            result.title,
            result.text,
            result.image,
            result.tokens,
            result.url
        );
    }

    private parseTokenResult(result: any): TokenResult {
        let chartValues = result.chart.map(v => {
            return {x: v.timestamp, y: v.closeValue};
        });

        return new TokenResult(
            result.data.name,
            result.data.fullName,
            result.data.coinName,
            result.data.symbol,
            result.data.image,
            result.data.url,
            result.data.totalCoinSupply,
            result.catUsd,
            chartValues,
        );
    }

    private parseAddressResult(result: any): AddressResult {
        let tokens: AddressTokenResult[] = result.tokens.map(v => {
            v.token.name = v.token.name ? v.token.name : "Noname";
            v.token.symbol = v.token.symbol ? v.token.symbol : "?";

            return new AddressTokenResult(
                v.token.address,
                v.token.name,
                v.token.symbol,
                v.token.image,
                v.token.price,
                v.balance / 10 ** v.token.decimals,
            );
        });

        if ('eth' in result) {
            result['blockchain'] = 'Ethereum';
            result['blockchainCode'] = 'ETH';
            result['balance'] = result.eth.balance;

        } else {
            return null;
        }

        return new AddressResult(
            result.address,
            result.blockchain,
            result.blockchainCode,
            result.balance,
            result.countTxs,
            tokens
        );
    }
}
