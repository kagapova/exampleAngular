import {Component, OnInit, AfterContentInit} from '@angular/core';
import {SearchService} from '../../services/search.service';
import {Title} from '@angular/platform-browser';

declare let window: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {

    constructor(private searchService: SearchService,
                private titleService: Title) {
    }

    ngOnInit() {
        this.searchService.clean();
        this.titleService.setTitle('Decenter Search');
    }

    ngAfterContentInit() {
        window.optimizely.push(["activate", 10325991945]);
    }
}
