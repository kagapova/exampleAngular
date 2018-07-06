import {Component, Input, OnInit} from '@angular/core';
import {Company} from '@app/models/company';
import {SearchResults} from '@app/models/search-result';
import {Event} from '@app/models/event';
import {WebResult} from '@app/models/web-result';
import {News} from '@app/models/news';
import {AuthService} from '@app/services/auth/auth.service';
import {CompanyBookmark} from '@app/models/company-bookmark';
import {CompanyBookmarksService} from '@app/services/company-bookmarks/company-bookmarks.service';

@Component({
    selector: 'app-search-result-company',
    templateUrl: './search-result-company.component.html',
    styleUrls: ['./search-result-company.component.scss']
})
export class SearchResultCompanyComponent implements OnInit {
    @Input() result: SearchResults;
    company: Company;
    webLinks: WebResult[];
    events: Event[];
    newsList: News[];
    isAuthenticated = false;
    isFollowed?: boolean = null;
    bookmarkId?: number = null;

    constructor(private auth: AuthService,
                private bookmarks: CompanyBookmarksService) {
    }

    ngOnInit() {
        this.company = this.result.data.company;
        this.webLinks = this.result.data.web;
        this.events = this.result.data.events;
        this.newsList = this.result.data.news;

        if (this.auth.isAuthenticated) {
            this.isAuthenticated = true;
            this.bookmarkId = this.company.bookmarkId;
            this.isFollowed = this.company.bookmarkId != null;
        }
    }

    private onFollow(isFollowed: boolean) {
        this.isFollowed = null;
        if (isFollowed) {
            this.bookmarks.addBookmark(this.company.slug).subscribe((bookmark: CompanyBookmark) => {
                this.bookmarkId = bookmark.id;
                this.isFollowed = true;
            });
        } else {
            this.bookmarks.removeBookmark(this.bookmarkId).subscribe(() => {
                this.bookmarkId = null;
                this.isFollowed = false;
            });
        }
    }
}
