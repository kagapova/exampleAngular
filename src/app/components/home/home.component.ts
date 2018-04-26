import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../services/search/search.service';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    height: string;

    constructor(private searchService: SearchService,
                private titleService: Title) {
    }

    ngOnInit() {
        this.searchService.clean();
        this.titleService.setTitle('Decentralized Search Engine for Blockchain and Crypto');
    }
}
