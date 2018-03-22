import {Component, OnInit} from '@angular/core';

import {SearchService} from '../../../services/search/search.service';
import {SearchResults} from '../../../models/search-result';
import {Observable} from 'rxjs/Observable';


@Component({
    selector: 'app-search-result-list',
    templateUrl: './search-result-list.component.html',
    styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent implements OnInit {
    searchResults$: Observable<SearchResults>;
    searchResults: SearchResults;

    constructor(private searchService: SearchService) {
    }

    ngOnInit() {
        this.searchResults$ = this.searchService.getSearchResults();
        this.searchResults$.subscribe(results => {
            this.searchResults = results;
        });
    }
}
