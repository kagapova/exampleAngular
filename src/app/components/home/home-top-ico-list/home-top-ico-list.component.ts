import {Component, OnInit} from '@angular/core';
import {TopIco} from '../../../models/top-ico';
import {Observable} from 'rxjs/Observable';
import {TopICOsService} from '../../../services/top-icos/top-icos.service';
import {AnalyticsService} from '../../../services/analytics/analytics.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home-top-ico-list',
    templateUrl: './home-top-ico-list.component.html',
    styleUrls: ['./home-top-ico-list.component.scss']
})
export class HomeTopIcoListComponent implements OnInit {
    icos$: Observable<TopIco[]>;

    constructor(private topIcosService: TopICOsService,
                private analytics: AnalyticsService,
                private router: Router) {
        this.icos$ = topIcosService.getIcos();
    }

    ngOnInit() {
        setTimeout(() => {
            this.topIcosService.updateIcos();
        }, 1);

        this.analytics.view('home-top-ico-list');
    }

    onClick(number: number, ico: TopIco) {
        if (ico !== null) {
            this.router.navigate(['/search'], {queryParams: {q: ico.name}});
            this.analytics.click('home-top-ico-list', number.toString());
        }
    }
}
