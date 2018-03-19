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
    height: string;

    constructor(private searchService: SearchService,
                private titleService: Title) {

        this.onWindowResize = this.onWindowResize.bind(this);
    }

    ngOnInit() {
        this.searchService.clean();
        this.titleService.setTitle('Decenter Search');

        window.addEventListener('resize', this.onWindowResize);
        this.onWindowResize();
    }

    ngAfterContentInit() {
        window.optimizely.push(['activate', 10325991945]);
    }

    onWindowResize() {
        let height = window.innerHeight * 5;
        this.height = `${height}px`;
    }
}
