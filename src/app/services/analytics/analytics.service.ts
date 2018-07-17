import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare var gtag: Function;

// environment
import { environment } from '@env/environment';

@Injectable()
export class AnalyticsService {

    constructor(private http: HttpClient) {
        gtag('js', new Date());
        gtag('config', environment.googleAnalyticsID, {'optimize_id': environment.googleOptimizeContainerID});
    }

    clickToOutgoingLink(block: string, serverTrackLink: string, label: string = '') {
        this.event(block, 'click-outgoing-link', label);

        if (serverTrackLink) {
            this.http.get(serverTrackLink).subscribe();
        }
    }

    click(block: string, label: string = '') {
        this.event(block, 'click', label);
    }

    search(block: string, searchTerm: string) {
        this.event(block, 'search', searchTerm);
    }

    view(block: string) {
        this.event(block, 'view', null);
    }

    pageView(path: string) {
        gtag('event', 'page_view', {'page_path': path});
    }

    event(event_category, event_action, event_label) {
        event_category = event_category.replace('search-block-', 'sb-');

        if (environment.googleAnalyticsID) {
            gtag('event', event_action, {
                'event_category': event_category,
                'event_label': event_label,
            });
        } else {
            // console.log(`Event: ${event_action}: {event_category: ${event_category}, event_label: ${event_label}}`);
        }
    }
}
