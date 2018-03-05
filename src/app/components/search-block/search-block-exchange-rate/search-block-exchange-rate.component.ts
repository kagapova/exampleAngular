import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-search-block-exchange-rate',
    templateUrl: './search-block-exchange-rate.component.html',
    styleUrls: ['./search-block-exchange-rate.component.scss']
})
export class SearchBlockExchangeRateComponent implements OnInit {
    @Input() symbol: string;
    @Input() price: number;

    constructor() {
    }

    ngOnInit() {
    }

}
