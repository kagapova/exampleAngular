import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

declare var gtag: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private skipedFirstNavigationEnd = false;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    if (this.skipedFirstNavigationEnd) {
                        gtag('event', 'pageview', {'page_path': event.url});
                    }

                    this.skipedFirstNavigationEnd = true;
                }
            });
    }
}
