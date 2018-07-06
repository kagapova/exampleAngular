import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SearchService} from '@app/services/search/search.service';
import {AnalyticsService} from '@app/services/analytics/analytics.service';
import {SuggestService} from '@app/services/suggest/suggest.service';
import {CompleterData} from 'ng2-completer';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
    nameRef = 'search-form';
    searchTerm: string;
    data: CompleterData;

    constructor(private searchService: SearchService,
                private router: Router,
                private analytics: AnalyticsService,
                private suggest: SuggestService) {
        this.data = suggest.asCompleterDataProvider();
    }

    ngOnInit() {
        this.searchService.getSearchTerm().subscribe(term => {
            this.searchTerm = term;
        });
        this.searchTerm = this.searchService.getCurrentSearchTerm();
    }

    onSubmit(value: string) {
        this.searchTerm = value;
        this.router.navigate(['/search'], {queryParams: {q: value}});
        this.analytics.search(this.nameRef, value);
    }
}
