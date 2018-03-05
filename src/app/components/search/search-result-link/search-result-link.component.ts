import {Component, Input, OnInit} from '@angular/core';
import {WebResult} from '../../../models/web-result';
import {SearchResults} from '../../../models/search-result';

@Component({
    selector: 'app-search-result-link',
    templateUrl: './search-result-link.component.html',
    styleUrls: ['./search-result-link.component.scss']
})
export class SearchResultLinkComponent implements OnInit {
    @Input() result: SearchResults;
    @Input() webLinks: WebResult[];

    constructor() {
    }

    ngOnInit() {
        this.webLinks = this.result.data.web;
    }
}
