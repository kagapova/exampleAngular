import { Component, Input, OnInit } from '@angular/core';
import {ExchangeCurrencyRate} from '../../../models/exchange';

@Component({
    selector: 'app-search-block-exchange-current-rate-list',
    templateUrl: './search-block-exchange-current-rate-list.component.html',
    styleUrls: ['./search-block-exchange-current-rate-list.component.scss']
})
export class SearchBlockExchangeCurrentRateListComponent implements OnInit {
    @Input() rates: ExchangeCurrencyRate[];

    readonly MAX_RATES = 5;

    constructor() { }

    ngOnInit() {
    }
}
