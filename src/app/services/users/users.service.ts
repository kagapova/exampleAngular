import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '@app/models/user';
import { AuthService } from '@app/services/auth/auth.service';
import {throwError} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/observable/timer';
const retryStrategy = ({ timeout }) => (errors: Observable<any>) => errors
    .mergeMap((error, index) => {
        if (error.status === 403) {
            return throwError(error);
        }
        return Observable.timer(timeout);
    });

// environment
import { environment } from '@env/environment';

@Injectable()
export class UsersService {
    // @todo: Fix urls
    private readonly URL_USER = `${environment.apiURL}/api/user/v1`;

    constructor(private readonly http: HttpClient, private readonly auth: AuthService) { }

    getUser(): Observable<User | {}> {
        return this.http
            .get(this.URL_USER, { headers: { 'Content-Type': 'application/json' } })
            .retryWhen(retryStrategy({ timeout: 1000 }))
            .map((resp: UserResponse) => new User(resp.publicKey, resp.token))
            .do(user => this.auth.setUser(user));
    }
}
