import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {News} from '@app/models/news';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {parseNews} from '@app/services/search/categories/news';
import {retry} from 'rxjs/operators';

// environment
import { environment } from '@env/environment';

@Injectable()
export class LatestNewsService {
    readonly MAX_SIZE = 5;
    readonly URL = `${environment.apiURL}/api/news/v1`;
    private news = new Subject<News[]>();

    constructor(private http: HttpClient) {
    }

    public getNews(): Subject<News[]> {
        return this.news;
    }

    public updateNews() {
        this.news.next([]);

        this.http.get(this.URL, {observe: 'response'})
            .pipe(
                retry(3)
            )
            .subscribe((resp: HttpResponse<LatestNewsResponse>) => {
                this.news.next(resp.body.news.map(parseNews).splice(0, this.MAX_SIZE));
            });
    }
}
