import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Trend} from '@app/models/trend';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {retry} from 'rxjs/operators/retry';

// environment
import { environment } from '@env/environment';

@Injectable()
export class TrendingSearchesService {
    private url = `${environment.apiURL}/api/trending-requests/v1`;
    private results = new Subject<Trend[]>();

    constructor(private http: HttpClient) {
    }

    getTrendResults(): Observable<Trend[]> {
        return this.results;
    }

    getTrends() {
        this.setEmptyValues();

        this.http.get(this.url, {observe: 'response'})
            .pipe(
                retry(3)
            )
            .subscribe((resp: HttpResponse<TrendsResponse>) => {
                const trends = this.parseResponse(resp.body);
                this.results.next(trends);
            });
    }

    private parseResponse(response: TrendsResponse): Trend[] {
        const result = [];
        for (const value of response.trendingRequests) {
            const trend = new Trend(value.request, 0);
            result.push(trend);
        }

        return result.splice(0, 10);
    }

    private setEmptyValues() {
        const trends = [];
        for (let i = 0; i < 10; i++) {
            const trend = new Trend(null, null);
            trends.push(trend);
        }

        this.results.next(trends);
    }
}
