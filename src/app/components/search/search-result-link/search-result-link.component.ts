import {Component, Input, OnInit} from '@angular/core';
import {WebResult} from '@app/models/web-result';
import {SearchResults} from '@app/models/search-result';

@Component({
    selector: 'app-search-result-link',
    templateUrl: './search-result-link.component.html',
    styleUrls: ['./search-result-link.component.scss']
})
export class SearchResultLinkComponent implements OnInit {
    @Input() result: SearchResults;
    @Input() webLinks: WebResult[];

    ngOnInit() {
        this.webLinks = this.result.data.web;
    }
}
