import {Component, OnInit, HostBinding} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

import {environment} from '@env/environment';
import {SearchService} from '@app/services/search/search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.html',
    styleUrls: ['./search.scss']
})
export class SearchComponent implements OnInit {

    @HostBinding('class.search') true: string;
    showLogin: boolean = false;
    tagline = 'Decentralized Search Engine for Blockchain and Crypto';

    constructor(private searchService: SearchService, private router: Router, private titleService: Title) {
        this.showLogin = !!environment.FEATURE_LOGIN;
    }

    ngOnInit() {
        const term = this.searchService.getCurrentSearchTerm();
        this.searchService.getSearchTerm().subscribe(value => {
            this.updateTitle(value);
        });
        this.updateTitle(term);
    }

    updateTitle(term: string) {
        if (!term) {
            this.router.navigate(['/']);
        }

        this.titleService.setTitle(`${term} - ${this.tagline}`);
    }
}
