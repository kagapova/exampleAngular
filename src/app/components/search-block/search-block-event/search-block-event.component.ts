import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../models/event';

@Component({
    selector: 'app-search-block-event',
    templateUrl: './search-block-event.component.html',
    styleUrls: ['./search-block-event.component.scss']
})
export class SearchBlockEventComponent implements OnInit {
    @Input() event: Event;

    constructor() {
    }

    ngOnInit() {
    }
}
