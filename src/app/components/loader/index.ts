import {Component} from '@angular/core';

@Component({
    selector: 'app-load',
    template: `<img class="load" src="/assets/images/loading.svg">`,
    styles:  [`
        .load {
            width: 16px;
            height: 16px;
        }`
    ]
})
export class LoaderComponent {}
