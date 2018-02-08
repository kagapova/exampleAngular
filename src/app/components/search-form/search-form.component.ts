import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {SearchService} from "../../services/search.service";

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
    searchTerm: string;

    constructor(private searchService: SearchService,
                private router: Router) {
    }

    ngOnInit() {
        this.searchTerm = this.searchService.getSearchTerm();
    }

    onSubmit(value: string) {
        this.searchTerm = value;
        this.router.navigate(['/search'], {queryParams: {q: value}});
        this.searchService.search(value);
    }
}
