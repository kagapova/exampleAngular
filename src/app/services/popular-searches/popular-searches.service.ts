import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { retry } from 'rxjs/operators/retry';
import { PopularSearch } from '@app/models/popular-search';
import { mock } from './popular-searches.mock';

const mockResponse = true;

// environment
import { environment } from '@env/environment';

@Injectable()
export class PopularSearchesService {
    readonly url = `${environment.apiURL}/api/popular-searches/v1`;
    private _popularSearches = new Subject<PopularSearch[]>();

    constructor(private http: HttpClient) {
    }

    public get popularSearches(): Observable<PopularSearch[]> {
        return this._popularSearches;
    }

    public updatePopularSearches() {
      if (mockResponse) {
        this._popularSearches.next(this.parseResponse(mock.body));
      } else {
        this.http
          .get(this.url, {observe: 'response'})
          .pipe(retry(3))
          .subscribe((resp: HttpResponse<PopularSearchesResponse>) => {
            this._popularSearches.next(this.parseResponse(resp.body));
        });
      }
    }

    private parseResponse(data: PopularSearchesResponse): PopularSearch[] {
      return data.popularSearches.map((popularSearch) => {
          return new PopularSearch(
            popularSearch.type,
            popularSearch.displayName);
      });
  }
}
