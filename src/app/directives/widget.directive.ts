import { Directive, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';
import 'rxjs/add/operator/shareReplay';

import {environment} from '@env/environment';
import {BaseWidgetService} from '@app/services/base/base-widget.service';
import {AuthService} from '@app/services/auth/auth.service';
import {User} from '@app/models/user';

@Directive({ selector: '[widgetDirective]' })
export class WidgetDirective implements OnInit, OnDestroy {

    private readonly widgetFilename: string = 'BASEAuthSDK.js';
    private readonly widgetUrl: string = 'base-auth-sdk-staging.herokuapp.com';
    private readonly widgetSelector = '#placeholder';
    private widget: BASEAuthSDK.Widget;
    public readonly user$ = this.auth.user$.shareReplay();
    public readonly loggedOut$ = this.user$.map(user => !user);

    destroy$ = new Subject();

    getWidgetSrc(): string {
        return `https://${this.widgetUrl}/${this.widgetFilename}`;
    }

    constructor(
        private auth: AuthService,
        private widgetService: BaseWidgetService) {}

    ngOnInit() {
        if (environment.FEATURE_LOGIN) {
            this.createWidget();
        }
    }

    private createWidget() {
        const script = document.createElement('script');
        const head = document.querySelector('head');

        script.type = 'text/javascript';
        script.src = this.getWidgetSrc();
        script.onload = () => this.onWidgetSuccess();
        script.onerror = event => this.onWidgetError(event);
        head.appendChild(script);
    }

    onWidgetSuccess(): void {
        this.widget = new BASEAuthSDK.Widget({
            verificationMessage: this.getSeedPhrase(),
            buttonStyle: this.getButtonStyles()
        });
        this.widget.insertLoginButton(this.widgetSelector);
        this.widget.listenForLogin(account => this.onWidgetLogin(account));

        this.widget.listenForLogout(() => {
            this.widgetService.unRegisterWidget();
            this.auth.logout();
        });
    }

    onWidgetError(event: any): void {}

    onWidgetLogin(account: BASEAuthSDK.Account): void {
        this.widgetService.registerWidget(this.widget);
        this.auth
            .authenticate(account.publicKey, account.sig, account.message)
            .pipe(takeUntil(this.destroy$))
            .subscribe((user: User) => {
                this.widget.getData()
                    .then(data => console.log(data))
                    .catch(err => console.error(err));
                }, (e: any) => { });
    }

    getSeedPhrase(): string {
        const numbers = [];
        for (let i = 0; i < 1000; i++) {
            numbers.push((Math.random() * 100).toString());
        }
        return numbers.join('');
    }

    getButtonStyles(): object {
        return {
            'width': '125px',
            'height': '40px',
            'border-radius': '5px',
            'background-color': 'rgba(35, 103, 200, 0.05)',
            'color' : '#2367c8',
        };
    }
    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
    logout() {
        this.auth.logout();
    }
}
