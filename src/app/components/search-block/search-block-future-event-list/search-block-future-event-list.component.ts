import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../models/event';

@Component({
    selector: 'app-search-block-future-event-list',
    templateUrl: './search-block-future-event-list.component.html',
    styleUrls: ['./search-block-future-event-list.component.scss']
})
export class SearchBlockFutureEventListComponent implements OnInit {
    @Input() events: Event[];

    constructor() {
    }

    ngOnInit() {
    }

}
