import {Component, Input, OnInit} from '@angular/core';
import {Exchange} from '../../../models/exchange';

@Component({
    selector: 'app-search-block-token-exchanges-list',
    templateUrl: './search-block-token-exchanges-list.component.html',
    styleUrls: ['./search-block-token-exchanges-list.component.scss']
})
export class SearchBlockTokenExchangesListComponent implements OnInit {
    @Input() exchanges: Exchange[];

    readonly MAX_EXCHANGES = 5;

    constructor() { }

    ngOnInit() {
    }

}
