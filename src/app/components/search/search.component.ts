import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SearchService} from '../../services/search/search.service';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    constructor(private searchService: SearchService,
                private router: Router,
                private titleService: Title) {
    }

    ngOnInit() {
        this.searchService.getSearchTerm().subscribe(term => {
            this.updateTitle(term);
        });

        let term = this.searchService.getCurrentSearchTerm();
        this.updateTitle(term);
    }

    updateTitle(term: string) {
        if (!term) {
            this.router.navigate(['/']);
        }

        this.titleService.setTitle(`${term} - Decentralized Search Engine for Blockchain and Crypto`);
    }
}
