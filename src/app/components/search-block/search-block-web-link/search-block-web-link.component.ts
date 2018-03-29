import {Component, Input, OnInit} from '@angular/core';
import {WebResult} from '../../../models/web-result';

@Component({
    selector: 'app-search-block-web-link',
    templateUrl: './search-block-web-link.component.html',
    styleUrls: ['./search-block-web-link.component.scss']
})
export class SearchBlockWebLinkComponent implements OnInit {
    @Input() webLink: WebResult;
    @Input() number: number;

    constructor() {
    }

    ngOnInit() {
    }
}
