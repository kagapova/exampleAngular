import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/shareReplay';

import {environment} from '@env/environment';
import {AuthService} from '@app/services/auth/auth.service';

@Component({
    selector: 'app-user-account',
    templateUrl: './user-account.html',
    styleUrls: ['./user-account.scss']
})
export class UserAccountComponent implements OnDestroy {
    public showSignUp = false;

    destroy$ = new Subject();

    constructor(private auth: AuthService) {
        if (environment.FEATURE_LOGIN) {
            this.showSignUp = true;
            auth.user$.subscribe(user => {
                this.showSignUp = (user && user.token) ? false : true;
            });
        }
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
