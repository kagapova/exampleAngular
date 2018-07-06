import {Component, Input, OnInit} from '@angular/core';
import {Exchange} from '@app/models/exchange';

@Component({
    selector: 'app-token-exchanges-list',
    templateUrl: './token-exchanges-list.component.html',
    styleUrls: ['./token-exchanges-list.component.scss']
})
export class TokenExchangesListComponent implements OnInit {
    @Input() exchanges: Exchange[];

    readonly MAX_EXCHANGES = 5;

    constructor() { }

    ngOnInit() {
    }

}
