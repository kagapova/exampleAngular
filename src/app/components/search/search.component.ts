import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SearchService} from "../../services/search.service";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    constructor(private searchService: SearchService,
                private router: Router) {
    }

    ngOnInit() {
        let term = this.searchService.getSearchTerm();
        if (term === "") {
            this.router.navigate(['/']);
        }
    }
}
