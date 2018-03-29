import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../models/event';

@Component({
    selector: 'app-search-block-future-event',
    templateUrl: './search-block-future-event.component.html',
    styleUrls: ['./search-block-future-event.component.scss']
})
export class SearchBlockFutureEventComponent implements OnInit {
    @Input() event: Event;
    @Input() number: number;

    constructor() {
    }

    ngOnInit() {
    }
}
