import { Component, Input, OnInit } from '@angular/core';
import {ExchangeCurrencyRate} from '@app/models/exchange-currency-rate';

@Component({
    selector: 'app-exchange-current-rate-list',
    templateUrl: './exchange-current-rate-list.component.html',
    styleUrls: ['./exchange-current-rate-list.component.scss']
})
export class ExchangeCurrentRateListComponent implements OnInit {
    @Input() rates: ExchangeCurrencyRate[];

    readonly MAX_RATES = 5;

    constructor() { }

    ngOnInit() {
    }
}
