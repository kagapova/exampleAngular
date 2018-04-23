import {Component, Input, OnInit} from '@angular/core';
import {Exchange} from '../../../models/exchange';

@Component({
    selector: 'app-search-block-exchanger-other-list',
    templateUrl: './search-block-exchanger-other-list.component.html',
    styleUrls: ['./search-block-exchanger-other-list.component.scss']
})
export class SearchBlockExchangerOtherListComponent implements OnInit {
    @Input() exchangers: Exchange[];

    readonly sourceUrl = 'https://www.cryptocompare.com/exchanges/';
    readonly MAX_EXCHANGERS = 3;

    constructor() {
    }

    ngOnInit() {
    }
}
