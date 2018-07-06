import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/shareReplay';

@Injectable()
export class BaseWidgetService {
    private widget = new BehaviorSubject<BASEAuthSDK.Widget>(null);
    data$ = new BehaviorSubject<Map<string, string>>(null);

    constructor() {}

    registerWidget(widget: BASEAuthSDK.Widget) {
        this.widget.next(widget);
    }
    unRegisterWidget() {
        this.data$.next(null);
        this.widget.next(null);
    }
    getData(): Observable<Map<string, string>> {
        return this.widget
            .switchMap(widget =>
                widget
                    ? this.data$
                        .do(val => this.loadIfNot(val))
                    : Observable.of(null))
            .shareReplay();
    }
    loadIfNot(value: Map<string, string>) {
        if (value) {
            return;
        }
        this.widget.value.getData()
            .then(data => this.data$.next(data))
            .catch(err => this.data$.error(err));

    }
}
