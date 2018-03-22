import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AnalyticsService} from './services/analytics/analytics.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private skipedFirstNavigationEnd = false;

    constructor(private router: Router,
                private analytics: AnalyticsService,
                private translate: TranslateService) {

        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    if (this.skipedFirstNavigationEnd) {
                        analytics.pageView(event.urlAfterRedirects);
                    }

                    this.skipedFirstNavigationEnd = true;
                }
            });

        translate.setDefaultLang('en');
        translate.addLangs(['en', 'ru', 'zh']);
        translate.use(translate.getBrowserLang());
    }
}
