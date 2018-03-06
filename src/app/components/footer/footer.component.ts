import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    isRelative: boolean;

    constructor() {
    }

    ngOnInit() {
        window.addEventListener('resize', this.onUpdateWindow, true);
    }

    onUpdateWindow() {
        if (window.innerHeight <= window.screen.height) {
            this.isRelative = true;
        } else {
            this.isRelative = false;
        }

        console.log("this.isRelative", this.isRelative)
    }
}
