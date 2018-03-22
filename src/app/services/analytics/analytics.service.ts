import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {retry} from 'rxjs/operators';

declare var gtag: Function;

@Injectable()
export class AnalyticsService {

    constructor(private http: HttpClient) {
        gtag('js', new Date());
        gtag('config', environment.googleAnalyticsID);
    }

    clickToLink(block: string, serverTrackLink: string) {
        gtag('event', 'select_content', {'content_type': block});

        this.http.get(serverTrackLink)
            .pipe(
                retry(3)
            );
    }

    pageView(path: string) {
        gtag('event', 'pageview', {'page_path': path});
    }
}
