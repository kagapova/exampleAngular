import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/shareReplay';

import { AuthService } from '@app/services/auth/auth.service';

@Component({
    selector: 'app-base-auth',
    templateUrl: './base-auth.component.html',
    styleUrls: ['./base-auth.component.scss']
})
export class BaseAuthComponent implements OnDestroy {
    public readonly user$ = this.auth.user$.shareReplay();
    public readonly loggedOut$ = this.user$.map(user => !user);
    destroy$ = new Subject();

    constructor(private auth: AuthService) {
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}
