import {Component, Input, OnInit} from '@angular/core';
import {Exchange} from '@app/models/exchange';

@Component({
    selector: 'app-exchanger-other-list',
    templateUrl: './exchanger-other-list.component.html',
    styleUrls: ['./exchanger-other-list.component.scss']
})
export class ExchangerOtherListComponent implements OnInit {
    @Input() exchangers: Exchange[];

    readonly sourceUrl = 'https://www.cryptocompare.com/exchanges/';
    readonly MAX_EXCHANGERS = 3;

    constructor() {
    }

    ngOnInit() {
    }
}
