import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {TopIco} from '@app/models/top-ico';
import {retry} from 'rxjs/operators/retry';

@Injectable()
export class TopICOsService {
    private URL = '/api/ico/v1';
    private MAX_SIZE = 5;
    private icos = new Subject<TopIco[]>();

    constructor(private http: HttpClient) {
    }

    getIcos(): Subject<TopIco[]> {
        return this.icos;
    }

    updateIcos() {
        this.setEmptyValues();

        this.http.get(
            this.URL,
            {
                params: new HttpParams().set('count', this.MAX_SIZE.toString()),
                observe: 'response'
            })
            .pipe(
                retry(3)
            )
            .subscribe((resp: HttpResponse<TopICOsResponse>) => {
                this.icos.next(this.parseResponse(resp.body));
            });
    }

    private parseResponse(data: TopICOsResponse): TopIco[] {
        return data.icos.map(ico =>
            new TopIco(
                ico.data.title,
                ico.data.image,
                null === ico.data.icoStart ? null : new Date(ico.data.icoStart),
                null === ico.data.icoEnd ? null : new Date(ico.data.icoEnd),
                ico.data.icoType,
                ico.data.category
            )
        );
    }

    private setEmptyValues() {
        const icos = [];
        for (let i = 0; i < this.MAX_SIZE; i++) {
            icos.push(null);
        }

        this.icos.next(icos);
    }
}
