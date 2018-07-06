import { Component, Input, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Company } from '@app/models/company';
import { WebResult } from '@app/models/web-result';
import { BaseWidgetService } from '@app/services/base/base-widget.service';

export const USER_OFFERS = {

    investor: {
        title: 'MatchICO',
        description: 'Refer friends and get 200 CAT on your MatchICO account!',
        url: 'https://matchico.com/',
        reward: 200
    },
    developer: {
        title: 'Bitclave developer program | 27.06.2018 - 30.10.2018',
        description:
            'Submit your working code and compete for valuable prize',
        url: 'https://developer.bitclave.com/',
        reward: 500
    },
    miner: {
        title: 'Cheapest Mining',
        description:
            'Cheaper price, better service. Deeply trusted by more than 500,000 customers registered!',
        url: 'https://cheapest-mining.com/',
        reward: 10000
    }
};

@Component({
    selector: 'app-search-block-offer',
    templateUrl: './search-block-offer.component.html',
    styleUrls: ['./search-block-offer.component.scss']
})
export class SearchBlockOfferComponent implements OnInit {
    @Input() company: Company;
    webLinks = [];
    offerLinks$: Observable<Partial<WebResult>[]>;
    private readonly FAKE_COMPANY_NAME = 'BitClave';

    constructor(private widget: BaseWidgetService) {}

    ngOnInit() {
        this.offerLinks$ = this.widget
            .getData()
            .map(data => this.createOffers(data))
            .catch(err => Observable.of([]));
    }

    public createOffers(data: Map<string, string>): Partial<WebResult>[] {
        if (
            !data ||
            !this.company ||
            this.company.title !== this.FAKE_COMPANY_NAME
        ) {
            return [];
        }
        const links: Partial<WebResult>[] = [];

        if (this.isIcoInvestor(data)) {
            links.push(USER_OFFERS['investor']);
        }
        if (this.isDeveloper(data)) {
            links.push(USER_OFFERS['developer']);
        }
        if (this.isMiner(data)) {
            links.push(USER_OFFERS['miner']);
        }
        return links;
    }
    private isIcoInvestor(data: Map<string, string>): boolean {
        return parseFloat(data.get('ico_interest')) > 5;
    }
    private isDeveloper(data: Map<string, string>): boolean {
        return parseFloat(data.get('dev_interest')) > 5;
    }
    private isMiner(data: Map<string, string>): boolean {
        return parseFloat(data.get('mining_interest')) > 5;
    }
}
