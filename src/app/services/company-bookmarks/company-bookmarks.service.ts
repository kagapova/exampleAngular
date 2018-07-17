import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { retry } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { CompanyBookmark } from '@app/models/company-bookmark';

// environment
import { environment } from '@env/environment';

@Injectable()
export class CompanyBookmarksService {
    private readonly URL_COMPANY_BOOKMARKS = `${environment.apiURL}/api/user/v1/company-bookmarks`;

    constructor(private http: HttpClient) {
    }

    addBookmark(slug: string): Observable<CompanyBookmark> {
        const data = {
            'slug': slug,
        };

        const headers = {
            'Content-Type': 'application/json',
        };

        return this.http
            .post(this.URL_COMPANY_BOOKMARKS, data, {headers: headers})
            .pipe(retry(3))
            .map(this.parseCompanyBookmarResponse);
    }

    removeBookmark(id: number): Observable<any> {
        return this.http.delete(`${this.URL_COMPANY_BOOKMARKS}/${id}`);
    }

    private parseCompanyBookmarResponse(resp: CompanyBookmarkResponse): CompanyBookmark {
        return new CompanyBookmark(resp.id, resp.slug, new Date(resp.createdAt));
    }
}
