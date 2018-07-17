import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { retry } from 'rxjs/operators';
import { TokenBookmark } from '@app/models/token-bookmark';

// environment
import { environment } from '@env/environment';

@Injectable()
export class TokenBookmarksService {
    // @todo: Fix urls
    private readonly URL_TOKEN_BOOKMARKS = `${environment.apiURL}/api/user/v1/token-bookmarks`;

    constructor(private http: HttpClient) { }

    getTokensBookmarks(): Observable<Array<TokenBookmark>> {
        return this.http
            .get(this.URL_TOKEN_BOOKMARKS)
            .pipe(retry(3))
            .map((resp: Array<TokenBookmarkResponse>) => {
                return resp.map(this.parseTokenBookmarResponse);
            });
    }

    addTokenBookmark(cmcSlug: string): Observable<TokenBookmark> {
        const data = {
            'cmcSlug': cmcSlug,
        };

        const headers = {
            'Content-Type': 'application/json',
        };

        return this.http
            .post(this.URL_TOKEN_BOOKMARKS, data, {headers: headers})
            .pipe(retry(3))
            .map(this.parseTokenBookmarResponse);
    }

    getTokenBookmarkBySlug(cmcSlug: string): Observable<TokenBookmark> {
        return this.getTokensBookmarks().map((bookmarks: Array<TokenBookmark>) => {
            return bookmarks.find((bookmark: TokenBookmark) => {
                return bookmark.cmcSlug === cmcSlug;
            });
        });
    }

    removeTokenBookmark(id: number): Observable<any> {
        return this.http.delete(`${this.URL_TOKEN_BOOKMARKS}/${id}`);
    }

    private parseTokenBookmarResponse(resp: TokenBookmarkResponse): TokenBookmark {
        return new TokenBookmark(
                resp.id, resp.cmcSlug, resp.name, resp.imageUrl, new Date(resp.createdAt));
    }
}
