import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {retry} from 'rxjs/operators/retry';
import {Suggestion} from '@app/models/suggestion';
import {CompleterDataProvider} from './completer-data-provider';

// environment
import { environment } from '@env/environment';

@Injectable()
export class SuggestService {
    readonly URL = `${environment.apiURL}/api/suggest/v1`;
    private _suggestions = new Subject<Suggestion[]>();

    constructor(private http: HttpClient) {
    }

    public get suggestions(): Observable<Suggestion[]> {
        return this._suggestions;
    }

    public asCompleterDataProvider(): CompleterDataProvider {
        return new CompleterDataProvider(this);
    }

    public updateSuggestions(query: string) {
        this.http.get(this.URL, {observe: 'response', params: {'q': query}})
            .pipe(
                retry(3)
            )
            .subscribe((resp: HttpResponse<SuggestionsResponse>) => {
                this._suggestions.next(this.parseResponse(resp.body));
            });
    }

    private parseResponse(data: SuggestionsResponse): Suggestion[] {
        return data.suggestions.map((suggestion) => {
            return new Suggestion(
                suggestion.text,
                suggestion.frequency);
        });
    }
}
