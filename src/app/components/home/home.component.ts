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

        this.onWindowResize = this.onWindowResize.bind(this);
    }

    ngOnInit() {
        this.searchService.clean();
        this.titleService.setTitle('Decentralized Search Engine for Blockchain and Crypto');

        window.addEventListener('resize', this.onWindowResize);
        this.onWindowResize();
    }

    onWindowResize() {
        let height = window.innerHeight * 4;
        this.height = `${height}px`;
    }
}
