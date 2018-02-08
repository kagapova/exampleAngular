import {Component, Input, OnInit} from '@angular/core';
import {SearchResult} from "../../../models/search-result";

@Component({
    selector: 'app-search-result-item',
    templateUrl: './search-result-item.component.html',
    styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent implements OnInit {
    @Input() result: SearchResult;

    constructor() {
    }

    ngOnInit() {
    }
}
