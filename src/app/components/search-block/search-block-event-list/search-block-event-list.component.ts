import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../models/event';

@Component({
    selector: 'app-search-block-event-list',
    templateUrl: './search-block-event-list.component.html',
    styleUrls: ['./search-block-event-list.component.scss']
})
export class SearchBlockEventListComponent implements OnInit {
    @Input() events: Event[];

    constructor() {
    }

    ngOnInit() {
    }

}
