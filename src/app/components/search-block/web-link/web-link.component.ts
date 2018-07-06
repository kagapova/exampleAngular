import {Component, Input} from '@angular/core';
import {WebResult} from '@app/models/web-result';

@Component({
    selector: 'app-web-link',
    templateUrl: './web-link.component.html',
    styleUrls: ['./web-link.component.scss']
})
export class WebLinkComponent {
    @Input() webLink: WebResult;
    @Input() number: number;
    @Input() reward = false;
}
