import {Component, OnInit} from '@angular/core';

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
    }
}
