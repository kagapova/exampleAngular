import {Component, Input, OnInit} from '@angular/core';
import {WebResult} from '../../../models/web-result';

@Component({
    selector: 'app-search-block-web-link-list',
    templateUrl: './search-block-web-link-list.component.html',
    styleUrls: ['./search-block-web-link-list.component.scss']
})
export class SearchBlockWebLinkListComponent implements OnInit {
    @Input() webLinks: WebResult[];

    constructor() {
    }

    ngOnInit() {
    }
}
