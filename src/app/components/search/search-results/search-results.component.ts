import {Component, OnInit} from '@angular/core';
import {SearchService} from '@app/services/search/search.service';
import {SearchResults} from '@app/models/search-result';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
    searchResults$: Observable<SearchResults>;
    searchResults: SearchResults;

    constructor(private searchService: SearchService) {}

    ngOnInit() {
        this.searchResults$ = this.searchService.getSearchResults();
        this.searchResults$.subscribe(results => {
            this.searchResults = results;
        });
    }
}
