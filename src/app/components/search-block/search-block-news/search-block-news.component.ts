import { Component, Input, OnInit } from '@angular/core';
import {News} from '@app/models/news';

@Component({
    selector: 'app-search-block-news',
    templateUrl: './search-block-news.component.html',
    styleUrls: ['./search-block-news.component.scss']
})
export class SearchBlockNewsComponent implements OnInit {
    @Input()
    news: News;

    @Input()
    number: number;

    constructor() {
    }

    ngOnInit() {
    }
}
