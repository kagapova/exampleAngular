import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {environment} from '../environments/environment';
import {TranslateService} from '@ngx-translate/core';

declare var gtag: Function;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private skipedFirstNavigationEnd = false;

    constructor(private router: Router,
                private translate: TranslateService) {

        gtag('js', new Date());
        gtag('config', environment.googleAnalyticsID);

        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    if (this.skipedFirstNavigationEnd) {
                        gtag('event', 'pageview', {'page_path': event.urlAfterRedirects});
                    }

                    this.skipedFirstNavigationEnd = true;
                }
            });

        translate.setDefaultLang('en');
        translate.addLangs(['en', 'ru', 'zh']);
        translate.use(translate.getBrowserLang());
    }
}
