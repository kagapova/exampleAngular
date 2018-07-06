import {Component, OnInit, HostBinding} from '@angular/core';
import {SearchService} from '@app/services/search/search.service';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {

    @HostBinding('class.home') true: string;

    constructor(private searchService: SearchService,
                private titleService: Title) {}

    ngOnInit() {
        this.searchService.clean();
        this.titleService.setTitle('Decentralized Search Engine for Blockchain and Crypto');
    }
}
