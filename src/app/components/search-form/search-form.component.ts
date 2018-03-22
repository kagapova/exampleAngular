import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {SearchService} from "../../services/search/search.service";

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
        this.searchService.getSearchTerm().subscribe(term =>{
            this.searchTerm = term;
        });
        this.searchTerm = this.searchService.getCurrentSearchTerm();
    }

    onSubmit(value: string) {
        this.searchTerm = value;
        this.router.navigate(['/search'], {queryParams: {q: value}});
    }
}
