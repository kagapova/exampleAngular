import {Component, Input, OnInit} from '@angular/core';
import {Exchange} from '../../../models/exchange';

@Component({
    selector: 'app-search-block-exchange-about',
    templateUrl: './search-block-exchange-about.component.html',
    styleUrls: ['./search-block-exchange-about.component.scss']
})
export class SearchBlockExchangeAboutComponent implements OnInit {
    @Input() exchange: Exchange;

    constructor() {
    }

    ngOnInit() {
    }
}
