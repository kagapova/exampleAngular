import {Component, Input, OnInit} from '@angular/core';
import {Exchange} from '@app/models/exchange';

@Component({
    selector: 'app-exchange-about',
    templateUrl: './exchange-about.component.html',
    styleUrls: ['./exchange-about.component.scss']
})
export class ExchangeAboutComponent implements OnInit {
    @Input() exchange: Exchange;

    constructor() {
    }

    ngOnInit() {
    }
}
