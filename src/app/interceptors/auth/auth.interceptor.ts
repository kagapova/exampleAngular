import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '@app/services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.auth.token) {
            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    'X-Auth-Token': this.auth.token,
                }
            });
        }

        return next.handle(request);
    }
}
