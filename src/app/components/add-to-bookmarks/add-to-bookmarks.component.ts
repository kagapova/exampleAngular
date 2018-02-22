import {Component, OnInit} from '@angular/core';

declare var gtag: Function;

@Component({
    selector: 'app-add-to-bookmarks',
    templateUrl: './add-to-bookmarks.component.html',
    styleUrls: ['./add-to-bookmarks.component.scss']
})
export class AddToBookmarksComponent implements OnInit {
    showInstruction = false;

    constructor() {
    }

    ngOnInit() {
    }

    onClick() {
        this.showInstruction = true;
        gtag('event', 'add_to_bookmarks');
    }
}
