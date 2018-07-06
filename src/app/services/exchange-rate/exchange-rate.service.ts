import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { retry } from 'rxjs/operators/retry';
import { Subject } from 'rxjs/Subject';
import { ExchangeRate} from '@app/models/exchange-rate';
import { Blockchains } from '@app/models/blockchains';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExchangeRateService {
    private url = '/api/rates/v2';
    private results = new Subject<ExchangeRate[]>();

    constructor(private http: HttpClient) {
    }

    getExchangeRateResults(): Observable<ExchangeRate[]> {
        return this.results;
    }

    getRates(currencies: string[]) {
        this.setEmptyValues(currencies);

        const c = currencies.join(',');
        const apiURL = `${this.url}?t=${c}`;

        this.http.get(apiURL, {observe: 'response'})
            .pipe(retry(3))
            .subscribe((resp: HttpResponse<ExchangeRatesResponse>) => {
                const rateResults = this.parseResponse(resp.body, currencies);
                this.results.next(rateResults);
            });
    }

    private parseResponse(response: ExchangeRatesResponse, sort: string[]): ExchangeRate[] {
        const result = [];

        for (const value of response.rates) {
            const symbol = value.symbol.toUpperCase();

            result[sort.indexOf(symbol)] = new ExchangeRate(
                Blockchains[symbol],
                value.price,
                Math.round(value.change * 100) / 100,
            );
        }

        return result;
    }

    private setEmptyValues(currencies: string[]) {
        const rateResults = currencies.map(symbol => {
            return new ExchangeRate(Blockchains[symbol], null, null);
        });
        this.results.next(rateResults);
    }
}
