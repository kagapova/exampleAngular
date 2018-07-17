import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '@app/models/user';

// environment
import { environment } from '@env/environment';

@Injectable()
export class AuthService {
    private readonly URL_AUTH = `${environment.apiURL}/api/user/v1/auth`;
    private readonly TOKEN_KEY = 'auth-token';
    private readonly user = new BehaviorSubject<User>(null);
    public readonly user$ = this.user.asObservable();
    constructor(private http: HttpClient) {}

    authenticate(publicKey: string, signature: string, message: string): Observable<User> {
        const data = {
            'publicKey': publicKey,
            'signature': signature,
            'message': message,
        };

        const headers = {
            'Content-Type': 'application/json',
        };

        return this.http
            .post(this.URL_AUTH, data, { headers: headers })
            .pipe(
                retry(3),
                map((resp: AuthResponse) => {
                    localStorage.setItem(this.TOKEN_KEY, resp.token);
                    return new User(resp.publicKey, resp.token);
                }),
                tap(user => this.user.next(user)),
                catchError(error => {
                    this.user.next(null);
                    return throwError(error);
                })
            );
    }
    public logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        this.user.next(null);
    }
    public setUser(user: User): any {
        this.user.next(user);
    }
    get isAuthenticated(): boolean {
        return null !== this.token;
    }

    get token(): string {
        return localStorage.getItem(this.TOKEN_KEY);
    }
}
