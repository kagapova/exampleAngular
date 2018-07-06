import {Component, Input, OnInit, AfterViewInit} from '@angular/core';
import {AnalyticsService} from '@app/services/analytics/analytics.service';
import {Bancor} from '@app/models/bancor';
import {CalcResult} from '@app/models/calc-result';
import {Currency} from '@app/models/currency';

@Component({
    selector: 'app-exchange-rate',
    templateUrl: './exchange-rate.html',
    styleUrls: ['./exchange-rate.scss']
})
export class ExchangeRateComponent implements OnInit, AfterViewInit {
    @Input() bancor: Bancor;
    @Input() calc: CalcResult;
    @Input() currency: Currency;

    constructor(private analytics: AnalyticsService) {}

    ngOnInit() {
        this.analytics.view('exchange-rate');
    }

    ngAfterViewInit() {
        if (this.bancor) {
            BancorConvertWidget.init({
                type: '0',
                baseCurrencyId: '5a3794f26de5cb0001ce3993',
                pairCurrencyId: '5937d635231e97001f744267',
                primaryColor: '#0093EE',
                hideVolume: true,
                primaryColorHover: '#0285D7'
            });
        }
    }

    onBuy() {
        BancorConvertWidget.showConvertPopup('buy', this.bancor.ETH, this.bancor.id);
        this.analytics.click('exchange-rate', 'buy');
    }

    onSell() {
        BancorConvertWidget.showConvertPopup('sell', this.bancor.id, this.bancor.ETH);
        this.analytics.click('exchange-rate', 'sell');
    }

    get convertedAmount(): number {
        return this.calc.rate * this.calc.amount;
    }
}
