import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {SearchService} from "../../services/search/search.service";
import {AnalyticsService} from '../../services/analytics/analytics.service';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
    searchTerm: string;

    constructor(private searchService: SearchService,
                private router: Router,
                private analytics: AnalyticsService) {
    }

    ngOnInit() {
        this.searchService.getSearchTerm().subscribe(term =>{
            this.searchTerm = term;
        });
        this.searchTerm = this.searchService.getCurrentSearchTerm();
    }

    onSubmit(value: string) {
        this.searchTerm = value;
        this.router.navigate(['/search'], {queryParams: {q: value}});

        this.analytics.search('search-form', value);
    }
}
