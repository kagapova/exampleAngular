import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';
import {ExchangeRate} from '../../models/exchange-rates';
import {Blockchains} from '../../models/blockchains';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ExchangeRatesService {
    private url = '/api/rates/v1';
    private results = new Subject<ExchangeRate[]>();

    constructor(private http: HttpClient) {
    }

    getExchangeRateResults(): Observable<ExchangeRate[]> {
        return this.results;
    }

    getRates(currencies: string[]) {
        let rateResults = currencies.map(symbol => {
            return new ExchangeRate(Blockchains[symbol], null);
        });
        this.results.next(rateResults);

        let c = currencies.join(',');
        let apiURL = `${this.url}?t=${c}`;

        this.http.get(apiURL, {observe: 'response'})
            .pipe(
                retry(3)
            )
            .subscribe((resp: HttpResponse<ExchangeRatesResponse>) => {
                let rateResults = this.parseResponse(resp.body, currencies);
                this.results.next(rateResults);
            });
    }

    private parseResponse(response: ExchangeRatesResponse, sort: string[]): ExchangeRate[] {
        let result = [];

        for (let symbol in response.rates) {
            if (!response.rates.hasOwnProperty(symbol)) {
                continue;
            }

            let value = response.rates[symbol];
            symbol = symbol.toUpperCase();

            result[sort.indexOf(symbol)] = new ExchangeRate(Blockchains[symbol], value);
        }

        return result;
    }
}
